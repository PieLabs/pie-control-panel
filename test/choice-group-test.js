import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import ChoiceGroup from '../lib/choice-group';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

describe('<ChoiceGroup />', () => {

  let onChange;
  let wrapper;
  let options;
  beforeEach(() => {
    options = ['a', 'b', 'c'];
    onChange = sinon.stub();
    wrapper = shallow(<ChoiceGroup label="label" options={options} value={options[0]} onChange={onChange} />);
  });

  it('renders three options', () => {
    let mapped = wrapper.find(MenuItem).map(mi => mi.props().value);
    expect(mapped).to.eql(options);
  });

  it('sets the value', () => {
    let select = wrapper.first(SelectField);
    expect(select.props().value).to.eql('a');
  });

  it('sets the floatingLabelText', () => {
    let select = wrapper.first(SelectField);
    expect(select.props().floatingLabelText).to.eql('label');
  });

})