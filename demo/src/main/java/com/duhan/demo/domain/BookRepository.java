package com.duhan.demo.domain;

import org.springframework.data.jpa.repository.JpaRepository;

//@Repository 적어야 스프링 ioc에 빈으로 등록이되는데
//jpaRepository를 적으면 자동으로 빈등록해줌
//jparepository는 crud 함수를 들고있음
public interface BookRepository extends JpaRepository<Book, Long> {
}
