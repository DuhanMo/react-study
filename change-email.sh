#!/bin/bash

# 바꾸려는 이메일 주소
OLD_EMAIL="moduhan@Duhans-MacBook-Air.local"
NEW_EMAIL="duhandv@gmail.com"
NEW_NAME="Duhan Mo"

# git filter-branch 명령어를 사용하여 커밋 재작성
git filter-branch --env-filter '
OLD_EMAIL="moduhan@Duhans-MacBook-Air.local"
CORRECT_NAME="Duhan Mo"
CORRECT_EMAIL="duhandv@gmail.com"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags

# force push to remote repository (use with caution)
# git push --force --tags origin 'refs/heads/*'
