package com.duhan.demo.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * WebEnvrioment.MOCK = 실제 톰캣을 올리는게 아니라 다른 톰캣으로 테스트
 * WebEnviroment.RANDOM_PORT 실제 캣으로 테스
 */
@Transactional
@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class BookControllerIntegreTest {
    @Autowired
    private MockMvc mockMvc;

}
