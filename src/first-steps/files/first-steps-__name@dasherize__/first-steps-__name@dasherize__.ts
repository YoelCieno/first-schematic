
@Component({
  selector: 'FirstStep<%= name %>'
})

export class Steps<%= classify(name) %>Component {
  console.log('My first step is <%= name %>');
}
