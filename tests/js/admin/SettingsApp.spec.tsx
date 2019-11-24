import * as React from 'react'
import { shallow } from 'enzyme'
import { SettingsApp } from '../../../ts/admin/settings/components/SettingsApp'

describe('MyComponent', () => {
  it('should render correctly and have no props', () => {
    const component = shallow(<SettingsApp/>)
    expect(component.props()).toEqual({ })
    expect(component).toMatchSnapshot()
  })
})
