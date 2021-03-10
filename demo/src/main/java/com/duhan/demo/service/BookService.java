package com.duhan.demo.service;

import com.duhan.demo.domain.Book;
import com.duhan.demo.domain.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

// 기능을 정의할 수 있고 트랜잭션을 관리할 수 있음.

@RequiredArgsConstructor // final이 붙어있는 애들의 생성자를 자동으로 만들어줌
@Service
public class BookService {
    // 함수 => 송금() -> 레퍼지토리에 여러개의 함수 실행 -> commit or rollback
    private final BookRepository bookRepository;

    @Transactional // 서비스 함수가 종료될 때 commit할지 rollback할지 트랜잭션 관리
    public Book 저장하기(Book book) {
        return bookRepository.save(book);
    }
    @Transactional(readOnly = true) // jpa에서는 변경감지라는 내부기능이 존재, readOnly=true > 그 감지기능을 비활성화 , 내부연산이 줄어듬
    // update시의 정합성을 유지해줌 insert의 유령데이터 현상을 못막음
    public Book 한건가져오기(Long id) {
        return bookRepository.findById(id).orElseThrow(()->new IllegalArgumentException("id를 확인해 주세요!"));
    }
    @Transactional(readOnly = true)
    public List<Book> 모두가져오기() {
        return bookRepository.findAll();
    }
    @Transactional
    public Book 수정하기(Long id, Book book) {
        //더티체킹 update치기
        Book bookEntity = bookRepository.findById(id).orElseThrow(()->new IllegalArgumentException("id를 확인해 주세요!")); // 영속화(book 오브젝트)
        bookEntity.setTitle(book.getTitle());
        bookEntity.setAuthor(book.getAuthor());
        return bookEntity;
    }
    public String 삭제하기 (Long id) {
        bookRepository.deleteById(id); // 오류가 터지면 익셉션을 타니까 상관 없음
        return "ok";
    }
}
