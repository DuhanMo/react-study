package com.duhan.demo.web;

import com.duhan.demo.domain.Book;
import com.duhan.demo.domain.BookRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


/**
 * WebEnvrioment.MOCK = 실제 톰캣을 올리는게 아니라 다른 톰캣으로 테스트
 * WebEnviroment.RANDOM_PORT 실제 캣으로 테스
 */
@Slf4j
@Transactional
@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class BookControllerIntegreTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private BookRepository bookRepository;
    @Test
    public void save_테스트() throws Exception {
        // given (테스트를 하기 위한 준비)
        Book book = new Book(null, "스프링 따라하기", "코스");
//        object를 json으로 변환해주는 클래스 ObjectMapper
        String content = new ObjectMapper().writeValueAsString(book);

//        스텁 미리 행동을 지정할 수 있다.
//        bookService.저장하기 메소드에 book을 던져줘도 독립된 컨트롤러
//        환경이기때문에 (Service, Repository 등이 안떠있음 위에서 선언한건 가짜 Service) 실행이 제대로 안됨
//      결과가 어떻게 나올것인가 행동을 지정할 수 있다. 그게  thenReturn, 저장하기 메소드를 실행하면 1L인 객체 리턴

//        실제 서비스가 저장되기 때문에 스텁이 필요가 없음, 함수 실행 후 롤백이 된다.
//        when(bookService.저장하기(book)).thenReturn(new Book(1L, "스프링 따라하기", "코스"));

        // when (테스트 실행)
        ResultActions resultAction = mockMvc.perform(post("/book")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(content)
                .accept(MediaType.APPLICATION_JSON_UTF8));

        //then (검증)
        resultAction
                .andExpect(status().isCreated()) //201을 기대한다
                .andExpect(jsonPath("$.title").value( "스프링 따라하기")) // title이 스프링따라하기 가 맞는지 확인
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void findAll_테스트() throws Exception {
//        given
        List<Book> books = new ArrayList<>();
        books.add(new Book(null, "스프링 따라잡기", "duhan"));
        books.add(new Book(null, "리액트 따라잡기", "duhan"));
        books.add(new Book(null, "junit 따라잡기", "duhan"));
        bookRepository.saveAll(books);
//when
        ResultActions resultAction = mockMvc.perform((get("/book"))
                .accept(MediaType.APPLICATION_JSON_UTF8));

        // then
        resultAction
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", Matchers.hasSize(3)))
                .andExpect(jsonPath("$[2].title").value("junit 따라잡기"))
                .andDo(MockMvcResultHandlers.print());

    }

}
