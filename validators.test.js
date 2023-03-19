const {removeElement} = require('./RemoveElement.js');

describe('Check removeElement', () => {

    test('If the first parameter is not an array calling a function throws an error', () => {
        const arrayToTest = 5
        const itemToTest = 5
        expect(() => removeElement(arrayToTest, itemToTest)).toThrow()
    })
    test('An existing element is removed from the array', () => {
        const itemToTest = 5
        const arrayToTest = [1, 2, 3, 4, itemToTest, 6, 7]
        expect(removeElement(arrayToTest, itemToTest)).toBeUndefined()
        expect(arrayToTest).not.toContain(itemToTest)
    })
    test('Deletion of a non-existent element did not take place', () => {
        const itemToTest = 9
        const arrayToTest = [1, 2, 3, 4, 5, 6, 7]
        expect(arrayToTest.length).toEqual(7)
        expect(arrayToTest).not.toContain(itemToTest)
        expect(removeElement(arrayToTest, itemToTest)).toBeUndefined()
        expect(arrayToTest.length).toEqual(7)
    })
    test('If there are several elements for deletion in the array, should delete all specified items', () => {
        const arrayToTest = [1, 2, 3, 4, 5, 6, 7, 5]
        const itemToTest = 5
        expect(arrayToTest).toContain(itemToTest)
        expect(removeElement(arrayToTest, itemToTest)).toBeUndefined();
        expect(arrayToTest).not.toContain(itemToTest)
    })
    test('If the item is not an number or string calling a function throws an error', () => {
        const arrayToTest = [1, 2, 3, 4, 5, 6, 7, 5]
        const functionToTest = () => {
            console.log(arrayToTest)
        }
        const objToTest = {test: 1}
        const setToTest = new Set([1, 2, 3, 4, 5, 6, 7])
        const mapToTest = new Map()
        expect(() => removeElement(arrayToTest, functionToTest())).toThrow()
        expect(() => removeElement(arrayToTest, objToTest)).toThrow()
        expect(() => removeElement(arrayToTest, arrayToTest)).toThrow()
        expect(() => removeElement(arrayToTest, setToTest)).toThrow()
        expect(() => removeElement(arrayToTest, mapToTest)).toThrow()
    })
})