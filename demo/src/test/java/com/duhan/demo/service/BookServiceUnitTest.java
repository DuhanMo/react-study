package com.duhan.demo.service;

// 기능로직임 bookRepository가 떠야됨
// 서비스를 테스트하기 위해서는 BookRepository에 의존적이라서 개별테스트가안됨

import com.duhan.demo.domain.BookRepository;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.context.junit.jupiter.SpringExtension;

/**
 * BookRepository => 가짜 객체로 만들 수 있음
 * 그 환경을 mokito가 지원해줌
 */
// 모키토 환경으로
@ExtendWith(MockitoExtension.class)
public class BookServiceUnitTest {


    // 다른테스트랑 상관이없고 mokito라는 공간에 객체를 만들어줌
    @InjectMocks // BookService객체가 만들어질 때 해당 파일에 @Mock로 등록된 모든 애들을 주입받는다
    private BookService bookService; // bookservice를 띄우는 가장 쉬운방법

    @Mock
    private BookRepository bookRepository;     // BookService를 테스트하려면 bookrepository가 필요해서 띄움

}
