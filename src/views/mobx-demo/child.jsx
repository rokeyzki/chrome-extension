import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Form, Switch, Icon, Input, Select, DatePicker, Button } from 'antd';
import style from './style.scss';

const { RangePicker } = DatePicker;
const { Option } = Select;

@inject('userStore', 'countStore')
@observer
class ChildForm extends Component {
  static propTypes = {
    form: PropTypes.objectOf(PropTypes.any).isRequired,
    userStore: PropTypes.objectOf(PropTypes.any).isRequired,
    countStore: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  handleSubmit = () => {
    const { form, userStore, countStore } = this.props;
    console.log('userStore name:', userStore.name);

    form.validateFieldsAndScroll((err, values) => {
      countStore.saveChild(values);
    });
  }

  render() {
    const { form, countStore } = this.props;

    const { getFieldDecorator } = form;
    const { data: init } = toJS(countStore.child);

    return (
      <div className={style.childBox}>
        <div className={style.formItem}>
          {getFieldDecorator('enable', {
            valuePropName: 'checked',
            initialValue: (init && +init.enable === 1) ? true : undefined,
          })(<Switch
            checkedChildren={<Icon type="check" />}
            unCheckedChildren={<Icon type="cross" />}
          />)}
        </div>
        <div className={style.formItem}>
          {getFieldDecorator('time', {
            initialValue: (init && init.time) ? init.time : undefined,
          })(<RangePicker
            format="YYYY-MM-DD"
          />)}
        </div>
        <div className={style.formItem}>
          {getFieldDecorator('name', {
            initialValue: (init && init.name) ? init.name : undefined,
          })(<Input
            size="default"
            placeholder="输入关键词"
          />)}
        </div>
        <div className={style.formItem}>
          {
            getFieldDecorator('status', {
              initialValue: (init && init.status) ? `${init.status}` : undefined,
            // eslint-disable-next-line function-paren-newline
            })(
              <Select
                placeholder="请选择一项"
                optionFilterProp="children"
                style={{ width: '100%' }}
                filterOption={
                  (input, option) => (
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  )
                }
              >
                <Option value="all">全部</Option>
                <Option value="1">未开始</Option>
                <Option value="2">进行中</Option>
                <Option value="3">已过期</Option>
              </Select>,
            // eslint-disable-next-line function-paren-newline
            )
          }
        </div>
        <div className={style.formItem}>
          <Button onClick={this.handleSubmit}>保存</Button>
          <Button onClick={countStore.cancelChild} style={{ marginLeft: 15 }}>取消</Button>
        </div>
      </div>
    );
  }
}

const Child = Form.create()(ChildForm);

export default Child;
