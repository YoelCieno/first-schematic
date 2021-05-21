
@Component({
  selector: 'FirstStep<%= name %>'
})

export class Steps<%= classify(name) %>Component {
  console.log('<%= addAnyString(name) %>');
  console.log('My first step is <%= name %>');
}
