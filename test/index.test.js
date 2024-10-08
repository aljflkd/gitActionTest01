// TDD(Test Driven Development) 방식으로 테스트 코드 작성하기
const factorial = require('../src/index');
//index.js의 factorial이 잘 작동하는 지 확인
describe('factorial function', () => { //람다함수
    //테스트 케이스
    it('correctly computes factorial of a positive integer number', () => {
        expect(factorial(3)).toEqual(6); // 3! == 6
        expect(factorial(5)).toEqual(120); // 5! == 120
        expect(factorial(4)).toEqual(24); //4! == 24
    });


    // 테스트 케이스
    it('throws an error if a negative input is provided', () => {
        expect(() => { 
            factorial(-1); //factorial(-1)일 때 오류가 뜨는지
        }).toThrow('n must be a positive integer');
    });
});