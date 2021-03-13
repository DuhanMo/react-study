package com.duhan.demo.web;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import com.duhan.demo.domain.Book;
import com.duhan.demo.service.BookService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import com.fasterxml.jackson.databind.ObjectMapper;


@WebMvcTest
public class BookControllerUnitTest {

    @Autowired
    private MockMvc mockMvc; //주소 호출을 해서 테스트를 해주는 도구

    // 진짜를 쓰면 레포에 올려야해서.
    @MockBean //IoC 환경에 Bean 등록됨, 컨트롤러에서 서비스를 스프링환경에 띄울 수 없기때문에 Mock으로 목환경에 올리는게 아니라 MockBean으로 스프링환경(IoC)에 가짜빈등록.
    private BookService bookService;

//    BDD Mockito 패턴 given, when, then
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
        when(bookService.저장하기(book)).thenReturn(new Book(1L, "스프링 따라하기", "코스"));

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
        books.add(new Book(1L, "스프링 따라잡기", "duhan"));
        books.add(new Book(2L, "리액트 따라잡기", "duhan"));

        when(bookService.모두가져오기()).thenReturn(books);
//when
        ResultActions resultAction = mockMvc.perform((get("/book"))
            .accept(MediaType.APPLICATION_JSON_UTF8));

        // then
        resultAction
                .andExpect(status().isOk())
                .andExpect(jsonPath("$",Matchers.hasSize(2)))
                .andExpect(jsonPath("$[0].title").value("스프링 따라잡기"))
                .andDo(MockMvcResultHandlers.print());

    }

}



