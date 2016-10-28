import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import ControlPanel, { ChoiceGroup, ScoreDisplay } from '../lib/control-panel';

describe('<ControlPanel />', () => {

  let onChange;
  let wrapper;

  beforeEach(() => {
    onChange = sinon.stub();
    wrapper = shallow(<ControlPanel onChange={onChange} />);
  });

  it('renders three <ChoiceGroup /> components', () => {
    expect(wrapper.find(ChoiceGroup)).to.have.length(3);
  });

  it('renders one <ScoreDisplay /> components', () => {
    expect(wrapper.find(ScoreDisplay)).to.have.length(1);
  });

  it('has a default state', () => {
    expect(wrapper.state()).to.eql({ view: 'gather', lang: 'en-US', colorContrast: 'black_on_white' });
  });

  it('calls onChange for lang', () => {
    wrapper.instance().onLangChange({}, 0, 'en-us');
    sinon.assert.calledWith(onChange, 'lang', 'en-us');
  });

  it('calls onChange for view', () => {
    wrapper.instance().onViewChange({}, 0, 'view');
    sinon.assert.calledWith(onChange, 'view', 'view');
  });

  it('calls onChange for contrast', () => {
    wrapper.instance().onContrastChange({}, 0, 'white_on_black');
    sinon.assert.calledWith(onChange, 'colorContrast', 'white_on_black');
  });

});