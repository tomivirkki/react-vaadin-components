import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as vaadinComponents from 'react-vaadin-components';
import users from './users.js';
import moment from 'moment'
export const scope = {React, ReactDOM, Component, moment, users, ...vaadinComponents};

const components = [
  {
    name: 'Button',
    category: 'visualization & interaction',
    description: `Button is a typical UI control for communicating a user action.`,
    demo: '<Button>Button</Button>',
    featuresDescription: `
      The \`Button\` element works the same as the native \`<button>\` element,
      but offers better styling support and accessibility features.

      In addition to clicking, you can focus the button using the keyboard, and activate it with the Enter and Space keys.
      To add a listener for the resulting \`click\` event, use the typical \`onClick\` event binding.

      The built-in Lumo theme provides multiple variants for buttons of differet sizes and appearance.
      See more theme variant examples [here](https://vaadin.com/components/vaadin-button/html-examples/button-theme-variants-demos).
    `,
    featuresDemo: `
      <VerticalLayout>
        <TextField label="Activity Name" placeholder="eg. CIS 42" value={this.state.name} />
        <DatePicker label="Activity Date" value={this.state.date}></DatePicker>

        <HorizontalLayout theme="spacing">
          <Button theme="error tertiary" onClick={() => this.setState({name: '', date: ''})}>Reset</Button>

          <Button theme="primary">Submit</Button>
        </HorizontalLayout>
      </VerticalLayout>
      `
  },

  {
    name: 'Checkbox',
    description: `Description.`,
    demo: '<Checkbox>Checkbox</Checkbox>',
    featuresDescription: `
      Features description
    `,
    featuresDemo: `
      <div>
        <Checkbox
          onChange={e => this.setState({one: e.target.checked, two: e.target.checked})}
          indeterminate={this.state.one !== this.state.two}
          checked={this.state.one && this.state.two}>
          Select All
        </Checkbox>

        <Checkbox
          onChange={e => this.setState({one: e.target.checked})}
          checked={this.state.one}>
          Option one
        </Checkbox>

        <Checkbox
          onChange={e => this.setState({two: e.target.checked})}
          checked={this.state.two}>
          Option two
        </Checkbox>
      </div>
      `
  },

  {
    name: 'ComboBox',
    description: `Description.`,
    demo: '<ComboBox label="User" items={users} itemLabelPath="username" itemValuePath="username"></ComboBox>',
    featuresDescription: `
      Features description
    `,
    featuresDemo: `
      class ComponentExample extends Component {

        state = {}

        render() {
          return <ComboBox
            label="Country"
            onValueChanged={this.onValueChanged}
            dataProvider={this.dataProvider}></ComboBox>;
        }

        dataProvider = ({pageSize, page, filter}, callback) => {
          const url = \`https://demo.vaadin.com/demo-data/1.0/filtered-countries?index=$\{page * pageSize}&count=$\{pageSize}&filter=$\{filter}\`;

          fetch(url)
            .then(res => res.json())
            .then(({result, size}) => callback(result, size));
        }

        onValueChanged = e => console.log(\`Selected country: $\{e.detail.value}\`)

      }

      ReactDOM.render(<ComponentExample/>, mountNode);
      `
  },

  {
    name: 'DatePicker',
    description: `Description.`,
    demo: '<DatePicker label="Date"></DatePicker>',
    featuresDescription: `
      Features description
    `,
    featuresDemo: `
      class ComponentExample extends Component {

        state = {}

        dateFormat = 'DD.MM.YYYY'

        i18n = {
          week: 'viikko',
          calendar: 'kalenteri',
          clear: 'tyhjennä',
          today: 'tänään',
          cancel: 'peruuta',
          firstDayOfWeek: 1,
          monthNames:
            'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
          weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
          weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
          formatTitle: (monthName, fullYear) => \`$\{monthName} $\{fullYear}\`,
          formatDate: date => moment(date).format(this.dateFormat),
          parseDate: dateString => {
            const parsed = moment(dateString, this.dateFormat);
            return {
              day: parsed.get('date'),
              month: parsed.get('month'),
              year: parsed.get('year')
            };
          }
        };

        render() {
          return <DatePicker
          label="Birthday"
          value="1980-08-14"
          initialPosition="1980-01-01"
          i18n={this.i18n}></DatePicker>
        }

      }

      ReactDOM.render(<ComponentExample/>, mountNode);
      `
  },

  {
    name: 'Dialog',
    category: '',
    description: `Dialog description`,
    demo: `
      <div>
        <Dialog opened={this.state && this.state.dialogOpened}>
          Dialog content
        </Dialog>

        <Button onClick={e => this.setState({dialogOpened: true})}>Open dialog</Button>
      </div>`,
    featuresDescription: `
      Dialog description
    `,
    featuresDemo: `
      <div>
        <Dialog noCloseOnEsc noCloseOnOutsideClick opened={this.state.dialogOpened}>
          <VerticalLayout theme="padding">
            <h2>Login</h2>
            <TextField required label="Username or email"></TextField>
            <PasswordField required label="Password"></PasswordField>
          </VerticalLayout>

          <HorizontalLayout theme="spacing padding">
            <Button theme="primary" onClick={e => this.setState({dialogOpened: false})}>Login</Button>
            <Button onClick={e => this.setState({dialogOpened: false})}>Cancel</Button>
          </HorizontalLayout>
        </Dialog>

        <Button onClick={e => this.setState({dialogOpened: true})}>Login</Button>
      </div>
      `
  },

  {
    name: 'Grid',
    category: 'visualization & interaction',
    description: `Grid is a free, high quality data grid / data table component`,
    demo: `
      <Grid items={users}>
        <GridSelectionColumn autoSelect></GridSelectionColumn>
        <GridSortColumn path="name.first"></GridSortColumn>
        <GridSortColumn path="name.last"></GridSortColumn>
        <GridColumn path="location.city"></GridColumn>
        <GridColumn path="visitCount" textAlign="end"></GridColumn>
      </Grid>
    `,
    featuresDescription: `
      Grid features description
    `,
    featuresDemo: `
      class ComponentExample extends Component {

        state = {
          users: users.slice(0),
          detailsOpenedItems: [],
          selectedItems: []
        }

        render() {
          return <VerticalLayout theme="spacing">
            <Grid
              theme="wrap-cell-content"
              onClick={this.onGridClick}
              selectedItems={this.state.selectedItems}
              onSelectedItemsChanged={e => this.setState({selectedItems: e.target.selectedItems}) }
              items={this.state.users}
              columnReorderingAllowed
              multiSort
              detailsOpenedItems={this.state.detailsOpenedItems}
              rowDetailsRenderer={this.rowDetailsRenderer}>

              <GridSelectionColumn frozen></GridSelectionColumn>

              <GridColumnGroup header="Name" resizable>
                <GridSortColumn path="name.first"></GridSortColumn>
                <GridSortColumn path="name.last"></GridSortColumn>
              </GridColumnGroup>

              <GridColumn header="Address" renderer={this.locationRenderer} width="200px" resizable></GridColumn>
              <GridColumn path="visitCount" textAlign="end"></GridColumn>
            </Grid>

            <Button
              theme="primary"
              disabled={!this.state.selectedItems.length}
              onClick={this.removeSelected}>
              Remove selected ({this.state.selectedItems.length})
            </Button>
          </VerticalLayout>;
        }

        locationRenderer = ({item}) => <span>{\`$\{item.location.street}, $\{item.location.city}\`}</span>

        rowDetailsRenderer = ({item}) => {
          return <HorizontalLayout style={{display: 'flex'}} theme="padding spacing">
            <img src={item.picture.thumbnail} style={{height: '48px', width: '48px'}} />
            <VerticalLayout>
              <span><b>Email:</b> {item.email}</span>
              <span><b>Username:</b> {item.username}</span>
              <span><b>Password:</b> {item.password}</span>
            </VerticalLayout>
          </HorizontalLayout>;
        }

        onGridClick = e => {
          if (e.target.checked !== undefined) {
            // Let's ignore selection column clicks
            return;
          }
          let grid = e.target;
          while (!grid.getEventContext) grid = grid.parentNode;
          const {item} = grid.getEventContext(e);

          this.setState({detailsOpenedItems:
            this.state.detailsOpenedItems.includes(item) ?
            this.state.detailsOpenedItems.filter(i => i !== item) :
            this.state.detailsOpenedItems.concat(item)
          });
        }

        removeSelected = () => {
          this.setState({
            users: this.state.users.filter(u => !this.state.selectedItems.includes(u)),
            selectedItems: []
          })
        }
      }

      ReactDOM.render(<ComponentExample/>, mountNode);
    `
  },

  {
    name: 'HorizontalLayout',
    description: `Description`,
    demo: `
      <HorizontalLayout>
        <div>Item 1</div>
        <div>Item 2</div>
      </HorizontalLayout>
    `,
    featuresDescription: `
      HorizontalLayout description
    `,
    featuresDemo: `
      <div style={{border: "1px solid grey"}}>
        <HorizontalLayout style={{border: "1px dashed grey"}} theme={
          this.state && \`$\{this.state.spacing && 'spacing'} $\{this.state.padding && 'padding'} $\{this.state.margin && 'margin'}\`}>
          <Checkbox
            onChange={e => this.setState({spacing: e.target.checked})}
            checked={this.state.spacing}>
            Spacing
          </Checkbox>
          <Checkbox
            onChange={e => this.setState({padding: e.target.checked})}
            checked={this.state.padding}>
            Padding
          </Checkbox>
          <Checkbox
            onChange={e => this.setState({margin: e.target.checked})}
            checked={this.state.margin}>
            Margin
          </Checkbox>
        </HorizontalLayout>
      </div>
    `
  },

  {
    name: 'ListBox',
    description: `Description`,
    demo: `
      <ListBox>
        <b>Register to a Run Event</b>
        <Item>5k</Item>
        <Item disabled>10k (sold out)</Item>
        <hr></hr>
        <Item>Half marathon</Item>
        <Item>Marathon</Item>
      </ListBox>
    `,
    featuresDescription: `
      Features description
    `,
    featuresDemo: `
      <ListBox
        onSelectedChanged={e => console.log(\`Selected index: $\{e.detail.value}\`)}>
        <b>Select a User</b>
        {users.slice(0, 5).map(user => <Item key={user.email}>{user.email}</Item>)}
      </ListBox>
    `
  },

  {
    name: 'PasswordField',
    description: `Description`,
    demo: '<PasswordField label="Password"></PasswordField>',
    featuresDescription: `
      Features description
    `,
    featuresDemo: `
      <VerticalLayout>
        <PasswordField label="Secret"></PasswordField>
        <PasswordField label="Super secret" revealButtonHidden></PasswordField>
      </VerticalLayout>
    `
  },

  {
    name: 'TextArea',
    category: 'form inputs',
    description: `Description`,
    demo: '<TextArea label="Description"></TextArea>',
    featuresDescription: `
      TextArea description
    `,
    featuresDemo: `
      <TextArea
        label="Dietary notes"
        style={{minHeight: "100px", maxHeight: "200px"}}>
      </TextArea>
      `
  },

  {
    name: 'TextField',
    category: 'form inputs',
    description: `TextField specifies a text input control typically used in forms.`,
    demo: '<TextField label="First Name"></TextField>',
    featuresDescription: `
      TextField description
    `,
    featuresDemo: `
      <TextField
        label="Date of birth"
        required
        maxlength="10"
        errorMessage="Type date of birth in correct format (DD-MM-YYYY)"
        pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
        placeholder="DD-MM-YYYY">
      </TextField>
      `
  },

  {
    name: 'VerticalLayout',
    description: `Description`,
    demo: `
      <VerticalLayout>
        <div>Item 1</div>
        <div>Item 2</div>
      </VerticalLayout>
    `,
    featuresDescription: `
      VerticalLayout description
    `,
    featuresDemo: `
      <div style={{border: "1px solid grey"}}>
        <VerticalLayout style={{border: "1px dashed grey"}} theme={
          this.state && \`$\{this.state.spacing && 'spacing'} $\{this.state.padding && 'padding'} $\{this.state.margin && 'margin'}\`}>
          <Checkbox
            onChange={e => this.setState({spacing: e.target.checked})}
            checked={this.state.spacing}>
            Spacing
          </Checkbox>
          <Checkbox
            onChange={e => this.setState({padding: e.target.checked})}
            checked={this.state.padding}>
            Padding
          </Checkbox>
          <Checkbox
            onChange={e => this.setState({margin: e.target.checked})}
            checked={this.state.margin}>
            Margin
          </Checkbox>
        </VerticalLayout>
      </div>
    `
  },

].map(component => {
  component.id = component.name
    .replace(/([A-Z])/g, m => '-' + m.toLowerCase())
    .substr(1);
  return component;
});

export default components;
