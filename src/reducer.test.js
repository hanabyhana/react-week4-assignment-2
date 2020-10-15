import reducer from './reducer';

describe('reducer', () => {
  const initalRestaurants = [];
  const initalInputs = [
    { placeholder: '이름', value: '' },
    { placeholder: '분류', value: '' },
    { placeholder: '주소', value: '' },
  ];

  describe('undefined action', () => {
    it('changes nothing', () => {
      const { restaurants, inputs } = reducer();

      expect(restaurants).toStrictEqual(initalRestaurants);
      expect(inputs).toStrictEqual(initalInputs);
    });
  });

  describe('updateInputText', () => {
    it('changes input texts', () => {
      const newInputText = '마녀주방';
      const payload = { ...initalInputs[0], value: newInputText };
      const action = {
        type: 'updateInputText',
        payload,
      };

      const { inputs } = reducer({
        restaurants: initalRestaurants,
        inputs: initalInputs,
      }, action);

      expect(inputs[0].value).toBe('마녀주방');
    });
  });
});
