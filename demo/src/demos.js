import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as vaadinComponents from 'react-vaadin-components';
import users from './users.js';
import moment from 'moment'
export const scope = {React, ReactDOM, Component, moment, users, ...vaadinComponents};
export const componentCategories = ['Form inputs', 'Visualization', 'Layouts'];

const components = [
  {
    name: 'Accordion',
    category: 1,
    description: `description`,
    demo: `
      <Accordion>
        <AccordionPanel>
          <div slot="summary">Panel 1</div>
          <div>This panel is opened by default</div>
        </AccordionPanel>
        <AccordionPanel>
          <div slot="summary">Panel 2</div>
          <div>This panel is opened by clicking the summary.</div>
        </AccordionPanel>
      </Accordion>
    `,
    featuresDescription: `
      Features description
    `,
    featuresDemo: `
      <Accordion>
        <AccordionPanel theme="filled">
          <div slot="summary">Panel 1</div>
          <div>Panel content</div>
        </AccordionPanel>
        <AccordionPanel theme="filled">
          <div slot="summary">Panel 2</div>
          <div>Panel content</div>
        </AccordionPanel>
        <AccordionPanel theme="filled" disabled>
          <div slot="summary">Panel 3</div>
          <div>Panel content</div>
        </AccordionPanel>
      </Accordion>
      `
  },

  {
    name: 'Button',
    category: 1,
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
    category: 0,
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
    name: 'CheckboxGroup',
    category: 0,
    hostName: 'vaadin-checkbox',
    demoPath: 'checkbox-group-demos',
    description: `Description.`,
    demo: `
      <CheckboxGroup>
        <Checkbox value="1">
          Option 1
        </Checkbox>
        <Checkbox value="2">
          Option 2
        </Checkbox>
        <Checkbox value="3">
          Option 3
        </Checkbox>
      </CheckboxGroup>
      `,
    featuresDescription: `
      Features description
    `,
    featuresDemo: `
      class ComponentExample extends Component {

        state = {
          languages: []
        }

        render() {
          return <div>
            <CheckboxGroup
              label="Preferred language of contact"
              value={this.state.languages}
              onValueChanged={e => this.setState({languages: e.detail.value})}>
              <Checkbox value="en">
                English
              </Checkbox>
              <Checkbox value="fr">
                Français
              </Checkbox>
              <Checkbox value="de">
                Deutsch
              </Checkbox>
            </CheckboxGroup>

            <div>Selected value: {this.state.languages.join(',')}</div>
          </div>;
        }
      }

      ReactDOM.render(<ComponentExample/>, mountNode);
    `
  },

  {
    name: 'ComboBox',
    category: 0,
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
    name: 'ContextMenu',
    category: 1,
    description: `Description.`,
    demo: `
      <ContextMenu items={
        [
          {text: 'Item 1'},
          {text: 'Item 2'},
          {text: 'Item 3'}
        ]
      }>
        <p>This paragraph has a context menu. Open with right mouse button or a long touch on mobile devices.</p>
      </ContextMenu>
    `,
    featuresDescription: `
      Features description
    `,
    featuresDemo: `
      class ComponentExample extends Component {

        state = {
          notifications: [],
          items: [
            {text: 'Open'},
            {text: 'Open with...', children:
              [
                {text: 'Preview'},
                {text: 'Adobe Acrobat'},
                {text: 'Other...', children:
                  [
                    {text: 'Select an app'},
                    {text: 'Search for an app'}
                  ]
                }
              ]
            },
            {component: 'hr'},
            {text: 'Delete', disabled: true},
            {component: 'hr'},
            {text: 'Tags', children:
              [
                {text: 'Important', checkable: true},
                {text: 'School', checkable: true},
                {text: 'Work', checkable: true}
              ]
            }
          ]
        }

        render() {
          return <div>

            <ContextMenu
              onItemSelected={this.itemSelected}
              items={this.state.items}>
              <b>masters-thesis.pdf</b>
            </ContextMenu>

            {this.state.notifications}
          </div>
        }

        itemSelected = (e) => {
          const item = e.detail.value;
          if (item.checkable) {
            item.checked = !item.checked;
          }

          this.setState((state) => ({notifications: state.notifications.concat(
            <Notification opened key={Date.now()}>
              <VerticalLayout>
                <div>Action:</div>
                <i>{item.text}</i>
              </VerticalLayout>
            </Notification>
          )}));
        }
      }

      ReactDOM.render(<ComponentExample/>, mountNode);
      `
  },

  {
    name: 'DatePicker',
    category: 0,
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
    category: 1,
    description: `Dialog description`,
    demo: `
      class ComponentExample extends Component {

        state = {}

        render() {
          return <div>
            <Dialog
              opened={this.state.dialogOpened}
              onOpenedChanged={e => this.setState({dialogOpened: e.detail.value})}>
              <div>This is the dialog content</div>
            </Dialog>

            <Button onClick={e => this.setState({dialogOpened: true})}>
              Open dialog
            </Button>
          </div>
        }

      }

      ReactDOM.render(<ComponentExample/>, mountNode);
      `,
    featuresDescription: `
      Dialog description
    `,
    featuresDemo: `
      <div>
        <Dialog noCloseOnEsc noCloseOnOutsideClick opened={this.state.dialogOpened}>
          <VerticalLayout>
            <h2>Login</h2>
            <TextField required label="Username or email"></TextField>
            <PasswordField required label="Password"></PasswordField>
          </VerticalLayout>
          <br />
          <HorizontalLayout theme="spacing">
            <Button theme="primary" onClick={e => this.setState({dialogOpened: false})}>Login</Button>
            <Button onClick={e => this.setState({dialogOpened: false})}>Cancel</Button>
          </HorizontalLayout>
        </Dialog>

        <Button onClick={e => this.setState({dialogOpened: true})}>Login</Button>
      </div>
      `
  },

  {
    name: 'FormLayout',
    category: 2,
    description: `Description`,
    demo: `
      <FormLayout>
        <TextField label="First Name" value="Jane"></TextField>
        <TextField label="Last Name" value="Doe"></TextField>
        <TextField label="Email" value="jane.doe@example.com"></TextField>
      </FormLayout>
      `,
    featuresDescription: `
      Dialog description
    `,
    featuresDemo: `
      <FormLayout responsiveSteps = {[
        {"minWidth": 0, "columns": 1, "labelsPosition": "top"},
        {"minWidth": "25em", "columns": 1},
        {"minWidth": "40em", "columns": 2}
        ]}>

        <FormItem>
          <label slot="label">First Name</label>
          <TextField value="Jane" style={{width: '100%'}}></TextField>
        </FormItem>

        <FormItem>
          <label slot="label">Last Name</label>
          <TextField value="Doe" style={{width: '100%'}}></TextField>
        </FormItem>

        <FormItem>
          <label slot="label">Email</label>
          <TextField value="jane.doe@example.com" style={{width: '100%'}}></TextField>
        </FormItem>

        <FormItem>
          <label slot="label">Birthday</label>
          <DatePicker value="1993-06-23" style={{width: '100%'}}></DatePicker>
        </FormItem>

        <FormItem colspan="2">
          <label slot="label">Bio</label>
          <TextArea value="My name is Jane." style={{width: '100%'}}></TextArea>
        </FormItem>
      </FormLayout>
      `
  },

  {
    name: 'Grid',
    category: 1,
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
          selectedItems: [],
          activeSorting: []
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
              rowsDraggable
              dropMode={this.state.dropMode}
              onGridDragstart={this.onGridDragstart}
              onGridDragend={this.onGridDragend}
              onGridDrop={this.onGridDrop}
              onSorterChanged={this.onGridSort}
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

          this.setState((state) => ({detailsOpenedItems:
            state.detailsOpenedItems.includes(item) ?
            state.detailsOpenedItems.filter(i => i !== item) :
            state.detailsOpenedItems.concat(item)
          }));
        }

        removeSelected = () => {
          this.setState((state) => ({
            users: state.users.filter(u => !state.selectedItems.includes(u)),
            selectedItems: []
          }));
        }

        onGridDragstart = e => {
          if (this.state.activeSorting.length) {
            // TODO
          } else {
            this.setState({dropMode: 'between'});
            this.draggedItems = e.detail.draggedItems;
          }
        }

        onGridDrop = e => {
          const dropTargetItem = e.detail.dropTargetItem;
          if (this.draggedItems.indexOf(dropTargetItem) === -1) {
            const filteredUsers = this.state.users
              .filter(i => this.draggedItems.indexOf(i) === -1);

            let index = filteredUsers.length;
            if (dropTargetItem) {
              index = filteredUsers.indexOf(dropTargetItem)
                + (e.detail.dropLocation === 'below' ? 1 : 0);
            }

            const users = []
              .concat(filteredUsers.slice(0, index))
              .concat(this.draggedItems)
              .concat(filteredUsers.slice(index));

            this.setState({
              selectedItems: [],
              users
            });
          }

        }

        onGridDragend = () => {
          this.setState({dropMode: null});
        }

        onGridSort = e => {
          const sorterComponent = e.target;
          const activeSorting = this.state.activeSorting
            .filter(sorting => sorterComponent.path !== sorting)
            .concat(sorterComponent.direction ? sorterComponent.path : []);
          this.setState({activeSorting});
        }
      }

      ReactDOM.render(<ComponentExample/>, mountNode);
    `
  },

  {
    name: 'HorizontalLayout',
    category: 2,
    hostName: 'vaadin-ordered-layout',
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
          \`$\{this.state.spacing && 'spacing'} $\{this.state.padding && 'padding'} $\{this.state.margin && 'margin'}\`}>
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
    category: 0,
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
    name: 'Notification',
    category: 1,
    description: `Notification description`,
    demo: `
      <div>
        <Notification opened={this.state.open}>
          <div>
            <b>Notice</b><br />
            This is the notification content
          </div>
        </Notification>

        <Button onClick={e => this.setState({open: true})}>Show notification</Button>
      </div>`,
    featuresDescription: `
      Description
    `,
    featuresDemo: `
      class ComponentExample extends Component {
        state = {
          notifications: [],
          message: 'Hello World!',
          position: 'bottom-start',
          duration: 3000
        }

        removeOnClose = e => {
          if (!e.target.opened) {
            this.setState((state) => ({notifications: state.notifications.filter(n => n !== e.target)}));
          }
        }

        render() {
          return <VerticalLayout>
            <TextField
              label="Message"
              value={this.state.message}
              onValueChanged={e => this.setState({message: e.detail.value})}>
            </TextField>

            <Select
              label="Position"
              value={this.state.position}
              onValueChanged={e => this.setState({position: e.detail.value})}>
              {['top-stretch', 'top-start', 'top-center', 'top-end', 'middle', 'bottom-start', 'bottom-center', 'bottom-end', 'bottom-stretch']
                .map(position => <Item key={position} value={position}>{position}</Item>)}
            </Select>

            <RadioGroup
              label="Duration"
              value={this.state.duration}
              onValueChanged={e => this.setState({duration: e.detail.value})}>
              {[500, 3000, 10000]
                .map(duration => <RadioButton key={duration} value={duration}>{duration}ms</RadioButton>)}
            </RadioGroup>

            <Button onClick={() => this.setState((state) => ({
              notifications: state.notifications.concat(this.createNotification())
            }))}>Show notification</Button>

            <div>{this.state.notifications}</div>
          </VerticalLayout>;
        }

        createNotification() {
          return <Notification
            key={Date.now()}
            opened
            duration={this.state.duration}
            position={this.state.position}
            onOpenedChanged={this.removeOnClose}>
            {this.state.message}</Notification>;
        }
      }

      ReactDOM.render(<ComponentExample/>, mountNode);
    `
  },

  {
    name: 'PasswordField',
    category: 0,
    hostName: 'vaadin-text-field',
    demoPath: 'password-field-demos',
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
    name: 'ProgressBar',
    category: 1,
    description: `Description`,
    demo: `
      <ProgressBar value="0.3"></ProgressBar>
    `,
    featuresDescription: `
      Features description
    `,
    featuresDemo: `
      class ComponentExample extends Component {
        state = {step: 1}

        render() {
          return <div>
            <div>Step: <span>{this.state.step}</span> / 5</div>
            <ProgressBar min="0" max="5" value={this.state.step}></ProgressBar>

            <HorizontalLayout theme="spacing">
              <Button
                disabled={this.state.step === 0}
                onClick={() => this.setState((state) => ({step: state.step - 1}))}>
                Prev
              </Button>
              <Button
                disabled={this.state.step === 5}
                onClick={() => this.setState((state) => ({step: state.step + 1}))}>
                Next
              </Button>
            </HorizontalLayout>
          </div>
        }
      }

      ReactDOM.render(<ComponentExample/>, mountNode);
    `
  },

  {
    name: 'RadioButton',
    category: 0,
    description: `Description`,
    demo: `
      <RadioButton>Radio</RadioButton>
    `,
    featuresDescription: `
      Features description
    `,
    featuresDemo: `
      <RadioGroup>
        <RadioButton>English</RadioButton>
        <RadioButton checked>Finnish</RadioButton>
        <RadioButton disabled>Swedish</RadioButton>
      </RadioGroup>
    `
  },

  {
    name: 'RadioGroup',
    category: 0,
    hostName: 'vaadin-radio-button',
    demoPath: 'radio-group-demos',
    description: `Description`,
    demo: `
      <RadioGroup label="Risk level">
        <RadioButton>High</RadioButton>
        <RadioButton>Low</RadioButton>
        <RadioButton>Medium</RadioButton>
      </RadioGroup>
    `,
    featuresDescription: `
      Features description
    `,
    featuresDemo: `
      class ComponentExample extends Component {
        state = {complexity: 2}

        render() {
          return <RadioGroup
            value={this.state.complexity}
            label={\`Complexity level: $\{this.state.complexity}\`}
            onValueChanged={e => this.setState({complexity: e.detail.value})}>
            <RadioButton value="1">1</RadioButton>
            <RadioButton value="2">2</RadioButton>
            <RadioButton value="3">3</RadioButton>
            <RadioButton value="4">4</RadioButton>
          </RadioGroup>;
        }
      }

      ReactDOM.render(<ComponentExample/>, mountNode);
    `
  },

  {
    name: 'Select',
    category: 0,
    description: `Description`,
    demo: `
    class ComponentExample extends Component {

      render() {
        return <Select label="Select">
          <Item>Item1</Item>
          <Item>Item2</Item>
          <Item>Item3</Item>
        </Select>
      }
    }

    ReactDOM.render(<ComponentExample/>, mountNode);
    `,
    featuresDescription: `
      Features description
    `,
    featuresDemo: `
      class ComponentExample extends Component {
        state = {
          users: [
            {portrait: 'women/43.jpg', name: 'Gabriella', id: 1},
            {portrait: 'men/77.jpg', name: 'Rudi', id: 2},
            {portrait: 'men/35.jpg', name: 'Hamsa', id: 3},
            {portrait: 'men/76.jpg', name: 'Jacob', id: 4}
          ],
          selected: 2
        }

        render() {
          return <Select
            label="User"
            onValueChanged={e => this.setState({selected: e.detail.value})}
            value={this.state.selected}>
            {this.state.users.map(user => {
              return <Item key={user.id} value={user.id}>
                <img style={{width: '21px', verticalAlign: 'bottom'}} src={\`https://randomuser.me/api/portraits/$\{user.portrait}\`} />
                <span>&nbsp;{user.name}</span>
              </Item>
            })}
          </Select>;
        }
      }

      ReactDOM.render(<ComponentExample/>, mountNode);
    `
  },

  {
    name: 'TextArea',
    category: 0,
    hostName: 'vaadin-text-field',
    demoPath: 'text-area-demos',
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
    name: 'Tabs',
    category: 1,
    description: `Description`,
    demo: `
      <Tabs>
        <Tab>Tab one</Tab>
        <Tab>Tab two</Tab>
        <Tab>Tab three</Tab>
      </Tabs>`,
    featuresDescription: `
      Description
    `,
    featuresDemo: `
      <VerticalLayout>
        <Tabs style={{width: "100%"}}>
          <Tab>Tab one</Tab>
          <Tab>Tab two</Tab>
          <Tab disabled>Disabled tab</Tab>
          <Tab>Tab three</Tab>
          <Tab>Tab four</Tab>
          <Tab>Tab five</Tab>
          <Tab>Tab six</Tab>
        </Tabs>

        <Tabs orientation="vertical">
          <Tab>Tab one</Tab>
          <Tab>Tab two</Tab>
          <Tab disabled>Disabled tab</Tab>
          <Tab>Tab three</Tab>
          <Tab>Tab four</Tab>
          <Tab>Tab five</Tab>
          <Tab>Tab six</Tab>
        </Tabs>
      </VerticalLayout>
    `
  },

  {
    name: 'TextField',
    category: 0,
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
    category: 2,
    hostName: 'vaadin-ordered-layout',
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
          \`$\{this.state.spacing && 'spacing'} $\{this.state.padding && 'padding'} $\{this.state.margin && 'margin'}\`}>
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
}).sort((a, b) => a.name > b.name ? 1 : -1);

export default components;
