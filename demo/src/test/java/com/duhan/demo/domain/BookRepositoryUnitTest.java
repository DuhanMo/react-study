package com.duhan.demo.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)//데이터베이스를 진짜를쓸지 가짜를 쓸지, 가짜데이터베이스 any->none 실제디비
@DataJpaTest // jpa관련된 애들만 메모리에 뜸 Repository들을 IoC에 등록해둠
public class BookRepositoryUnitTest {

    @Autowired
    private BookRepository bookRepository;
}
