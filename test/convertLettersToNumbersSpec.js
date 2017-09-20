describe("convertLettersToNumbers Filter Test Suite", function() {
    "use strict";

    var $filter;

    beforeEach(module("convertLettersToNumbers"));
    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }));

    describe("Filter returns Error(-1) for all input except strings", function(){

        it("should return -1 for an integer input(12345)", function() {
            var result = $filter('convertLettersToNumbers')(12345);
            expect(result).toBe(-1);
        });

        it("should return -1 for an integer input(1)", function() {
            var result = $filter('convertLettersToNumbers')(1);
            expect(result).toBe(-1);
        });

        it("should return -1 for a null input", function() {
            var result = $filter('convertLettersToNumbers')(null);
            expect(result).toBe(-1);
        });

        it("should return -1 for a truthy boolean input", function() {
            var result = $filter('convertLettersToNumbers')(true);
            expect(result).toBe(-1);
        });

        it("should return -1 for a falsthy boolean input", function() {
            var result = $filter('convertLettersToNumbers')(false);
            expect(result).toBe(-1);
        });

        it("should return -1 for a empty input", function() {
            var result = $filter('convertLettersToNumbers')('');
            expect(result).toBe(-1);
        });

    });

    describe("Filter returns Error(-1) for strings that contain a invalid character", function(){

        it("should return -1 for a string containing an integer", function() {
            var result = $filter('convertLettersToNumbers')("abc123");
            expect(result).toBe(-1);
        });

        it("should return -1 for a string containing all integers", function() {
            var result = $filter('convertLettersToNumbers')("12356789");
            expect(result).toBe(-1);
        });


        it("should return -1 for a string containing special characters", function() {
            var result = $filter('convertLettersToNumbers')("!@#$%^&*");
            expect(result).toBe(-1);
        });

    });

    describe("Filter should be able to handle lowercase strings", function(){

        it("should return 1 for a", function() {
            var result = $filter('convertLettersToNumbers')("a");
            expect(result).toBe(1);
        });

        it("should return 26 for z", function() {
            var result = $filter('convertLettersToNumbers')("z");
            expect(result).toBe(26);
        });

        it("should return 13 for m", function() {
            var result = $filter('convertLettersToNumbers')("m");
            expect(result).toBe(13);
        });

        it("should return 123 for abc", function() {
            var result = $filter('convertLettersToNumbers')("abc");
            expect(result).toBe(123);
        });

        it("should return 89999999999999999 for hiiiiiiiiiiiiiii(largest lowercase number we can make)", function() {
            var result = $filter('convertLettersToNumbers')("hiiiiiiiiiiiiiii");
            expect(result).toBe(8999999999999999);


        });

    });

    describe("Filter should be able to handle lowercase strings", function(){
        it("should return 1 for a", function() {
            var result = $filter('convertLettersToNumbers')("A");
            expect(result).toBe(2);
        });

        it("should return 26 for z", function() {
            var result = $filter('convertLettersToNumbers')("Z");
            expect(result).toBe(52);
        });

        it("should return 13 for m", function() {
            var result = $filter('convertLettersToNumbers')("M");
            expect(result).toBe(26);
        });

        it("should return 123 for abc", function() {
            var result = $filter('convertLettersToNumbers')("ABC");
            expect(result).toBe(246);
        });

        it("should return 8888888888888888 for DDDDDDDDDDDDDDDD(largest uppercase number we can make)", function() {
            var result = $filter('convertLettersToNumbers')("DDDDDDDDDDDDDDDD");
            expect(result).toBe(8888888888888888);
        });


    });

    describe("Filter should be able to handle mixed lowercase and uppercase strings", function(){

        it("should return 12 for aA", function() {
            var result = $filter('convertLettersToNumbers')("aA");
            expect(result).toBe(12);
        });

        it("should return 2652 for zZ", function() {
            var result = $filter('convertLettersToNumbers')("zZ");
            expect(result).toBe(2652);
        });

        it("should return 1328 for m", function() {
            var result = $filter('convertLettersToNumbers')("mN");
            expect(result).toBe(1328);
        });

        it("should return 143 for aBc", function() {
            var result = $filter('convertLettersToNumbers')("aBc");
            expect(result).toBe(143);
        });

        it("should return 14340 for aBcT", function() {
            var result = $filter('convertLettersToNumbers')("aBcT");
            expect(result).toBe(14340);
        });


    });

    describe("should return -1 for string resulting in overflows", function() {

        it("should return -1 for HELLOWORLD", function() {
            var result = $filter('convertLettersToNumbers')("HELLOWORLD");
            expect(result).toBe(-1);
        });

        it("should return -1 for hiiiiiiiiiiiiiiii", function() {
            var result = $filter('convertLettersToNumbers')("hiiiiiiiiiiiiiiii");
            expect(result).toBe(-1);
        });

        it("should return -1 for azazazAZAZAZAZ", function() {
            var result = $filter('convertLettersToNumbers')("azazazAZAZAZAZ");
            expect(result).toBe(-1);
        });

    })

});