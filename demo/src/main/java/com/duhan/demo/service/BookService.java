package com.duhan.demo.service;

import com.duhan.demo.domain.Book;
import com.duhan.demo.domain.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

// 기능을 정의할 수 있고 트랜잭션을 관리할 수 있음.

@RequiredArgsConstructor // final이 붙어있는 애들의 생성자를 자동으로 만들어줌
@Service
public class BookService {
    // 함수 => 송금() -> 레퍼지토리에 여러개의 함수 실행 -> commit or rollback
    private final BookRepository bookRepository;

    public Book 저장하기(Book book) {
        return null;
    }
    public Book 한건가져오기(Long id) {
        return null;
    }

    public List<Book> 모두가져오기() {
        return null;
    }
}
