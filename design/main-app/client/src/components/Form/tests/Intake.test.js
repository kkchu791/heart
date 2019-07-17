import React from 'react';
import renderer from 'react-test-renderer';
import Intake from '../Intake.js';

it('renders correctly intake component', () => {
  const WrappedComponent = Intake(() => <div>I'm wrapped</div>);
  const IntakeComponent = renderer.create(<WrappedComponent />).toJSON();
  expect(IntakeComponent).toMatchSnapshot();
});
