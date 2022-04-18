import { setTextFilter } from '../../actions/filters'

test('should generate set text filter object with text value', () => {
    const text = 'Something in';
    const action = setTextFilter(text);

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})