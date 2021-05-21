
@Component({
  selector: 'FirstStep<%= name %>'
})

export class Step<%= classify(name) %>Component {
  console.log('<%= addAnyString(name) %>');
  console.log('My first step is <%= name %>');
}
