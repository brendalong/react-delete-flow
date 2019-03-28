After placing console.logs in the code to follow the actual flow, here is what I discovered:

1. Use of `<a href="#">` causes render to be re-called (page reloading)
2. Invoking `this.props.history.push("/animals")` within the onClick displays the following flow:
    AnimalList.render
    AnimalDetail.render:id 1
    AppViews.deleteAnimal: 1
    AnimalDetail.render:id 1 - caused by the `<a href="#">`. (console.log order is not consistent)
    AppViews.deleteAnimal.then.getAllAnimals
    AnimalDetail.render:id 1 - no animal exists at this point. 
    AnimalList.render
3. AnimalDetail is being rendered even though the animal by that id is no longer valid.

Propose
1. Change all `<a href="#">` to `<button onClick={}>`
    * `a` anchor tag. href is hypertext reference. Means to go somewhere. Without href, none of the link styling applies. 
    * `button` means to have interactivity. Give it styling to look like a link.
1. Invoke delete within the animal detail component. Once the server call is complete, `.then(() => this.props.history.push("/animals"))`

## Question: Does AppViews need to hold state for location, animals and employees?
1. After outlining each view, discovered state for locations, employees, animals is not shared.
    1. Independant calls are retrieving data as needed.
1. ComponentDidMount can load the data for each.
    1. AnimalsList invokes getting the animals on componentDidMount

