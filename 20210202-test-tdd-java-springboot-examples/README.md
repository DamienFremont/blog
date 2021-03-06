Test Driven Development (TDD) in Java - SpringBoot Examples
===========================================================

![alt text](screenshots/160523003036184.jpg)

Using Test-driven development to develop a new service on top of SpringBoot 'Hello' starter from https://spring.io/guides/gs/spring-boot/

---

## Result
Test-driven development is not about testing. Test-driven development is about development (and design), specifically improving the quality and design of code. The resulting unit tests are just an extremely useful by-product.

- Used @MockBean on Controller Test
- Used @CsvSourve on Transformer Test
- Used Mockito.verify() on Repository Test

--- 

## Specifications

- Start with SpringBoot 'Hello' starter from https://spring.io/guides/gs/spring-boot/
- Return "Goodbye from SPRING!"
- Return "Goodbye from <MY NAME>!", where <MY NAME> is path parameter
- Returned <MY NAME> is always transformed to UPPERCASE
- If parameter smaller than 3 chars, then exception "bad arg (ex: Damien)"

---

## Steps

Order is important, development will start from top-layer (ex: controller) to bottom (ex: data-access).

---

## Conclusion

Test-driven development is not about testing. 

Test-driven development is about development (and design), specifically improving the quality and design of code. The resulting unit tests are just an extremely useful by-product.

---

## Post

- https://damienfremont.com/2021/02/01/test-driven-development-tdd-in-java-helloworld-examples/

## References

- https://spring.io/guides/gs/spring-boot/
- https://javacodehouse.com/blog/test-driven-development-tutorial/#what-is-tdd
- https://technologyconversations.com/2014/09/30/test-driven-development-tdd/
- https://technologyconversations.com/2013/12/24/test-driven-development-tdd-best-practices-using-java-examples-2/