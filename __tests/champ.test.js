const { testAlphNum } = require("./alphnum");

// START TEST UNITS 

    describe("Est-ce que EstIam2022 est alphanumerique", function () {
        it("Est ce que c'est bien alphanumerique ?", function () {
            expect(testAlphNum('EstIam2022')).toEqual(true);
        });
    });

    describe("Est-ce que estiam22 est alphanumerique", function () {
        it("Est ce que c'est bien alphanumerique ?", function () {
            expect(testAlphNum('estiam22')).toEqual(true);
        });
    });

    describe("Est-ce que EsTiam 2022 est alphanumerique", function () {
        it("Est ce que c'est bien alphanumerique ?", function () {
            expect(testAlphNum('EsTiam 2022')).toEqual(false);
        });
    });


    describe("Est-ce que EsTiam-2022 est alphanumerique", function () {
        it("Est ce que c'est bien alphanumerique ?", function () {
            expect(testAlphNum('EsTiam-2022')).toEqual(false);
        });
    });

    describe("Est-ce que @esTiam@/.%2022 est alphanumerique", function () {
        it("Est ce que c'est bien alphanumerique ?", function () {
            expect(testAlphNum('@esTiam@/.%2022')).toEqual(false);
        });
    });

// END TEST UNITS