// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//PHONE NUMBER
test('Phone Number: (702) 541-0355', () => {
    expect(functions.isPhoneNumber("(702) 541-0355")).toBe(true);
  });

test('Phone Number: (702)410355', () => {
    expect(functions.isPhoneNumber("(702)410355")).toBe(false);
  });

test('Phone Number: 702-541-0355', () => {
    expect(functions.isPhoneNumber("702-541-0355")).toBe(true);
  });

test('Phone Number: 7025410355', () => {
    expect(functions.isPhoneNumber("7025410355")).toBe(false);
  });

//EMAIL
test('Email: niho@ucsd.edu', () => {
    expect(functions.isEmail("Niho@ucsd.edu")).toBe(true);
  });
test('Email: niho@ucsd', () => {
    expect(functions.isEmail("Niho@ucsd")).toBe(false);
  });
test('Email: @ucsd.edu', () => {
    expect(functions.isEmail("@ucsd.edu")).toBe(false);
  });
test('Email: ni_ho@ucsd.edu', () => {
    expect(functions.isEmail("Ni_ho@ucsd.edu")).toBe(true);
  });

//StrongPassword
test('Password: Ni_houcsdedu', () => {
    expect(functions.isStrongPassword("Ni_houcsdedu")).toBe(true);
  });

test('Password: Ni_ho@ucsdedu', () => {
    expect(functions.isStrongPassword("Ni_ho@ucsdedu")).toBe(false);
  });

test('Password: 7025410355', () => {
    expect(functions.isStrongPassword("7025410355")).toBe(false);
  });

test('Password: abcdefg', () => {
    expect(functions.isStrongPassword("abcdefg")).toBe(true);
  });

//isDate
test('Date: 99/99/9999', () => {
    expect(functions.isDate("99/99/9999")).toBe(true);
  });
test('Date: 0/0/0000', () => {
    expect(functions.isDate("0/0/0000")).toBe(true);
  });
test('Date: 1111/1111/11', () => {
    expect(functions.isDate("1111/1111/11")).toBe(false);
  });
test('Date: 22/1111/2', () => {
    expect(functions.isDate("22/1111/2")).toBe(false);
  });

//isHexColor
test('HexColor: FF9FF9', () => {
    expect(functions.isHexColor("FF9FF9")).toBe(true);
  });
test('HexColor: faf', () => {
    expect(functions.isHexColor("faf")).toBe(true);
  });
test('HexColor: ######', () => {
    expect(functions.isHexColor("######")).toBe(false);
  });
test('HexColor: 99', () => {
    expect(functions.isHexColor("99")).toBe(false);
  });