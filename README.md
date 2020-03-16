# RN Test Spec.

### Create a new component called `Product`.
- Component design: https://www.figma.com/file/bdgMzCq95xv9fHTsVq1gNL/Untitled?node-id=0%3A1
  - Use the `React Native Test` design.
- The component must have rounded corners, similar to the design.
- There should be no border around the component (On the design, the border is just the image that is used).
- The image must always conform to a 4:3 ratio.
- Images must cover all available space. There should be no whitespace in the component.
- The "Info bar" at the bottom of the component must be semi-transparent.
- The component must display a Name, Price, Short description.
- Additional: Display a circular avatar in the "Info bar".
- Assume prices are in GBP.
- Prices are provided as integers, but must be formatted as floats (100 -> 1.00).
- Prices can be discounted, either by value, or percentage.
- If a price is discounted, display the discounted price, and the original with strike-through.
- If the product is has a final cost of 0, display the text `Free` instead of the price.

### Update the second tab to display the information
- This screen should consist of a vertical list.
- Nested inside of this should be 3 horizontal lists. One for each product category.
- The items on each category should be sorted according to the `order` specified in the product.
- Edit the `Product` component to display the information imported from the json.
- Pressing on a `Product` should scale up the card while being pressed, giving the impression of the card rising up to the user's finger, before navigating them to a Details screen.
  - This animation needs to be custom made, using no packages.
  - Install the missing dependencies for this navigation.

### Details screen
- Create a screen that will display all of the information about the selected `Product`.
- This screen should display the image at the top, the name underneath, the price under this and then the description underneath.
- There must be a button at the top of the page to go back to the previous tabbed interface.

### Native Integration.
- Create a third tab on the application.
- This tab will display some information that will be stored in `Info.plist` and `strings.xml`.
  - On Android, you can find this key as `service_key`, in the strings.xml file.
  - On iOS, you can find it as `SERVICE_KEY` in the `Build Settings` of the target.
- Create Native Modules to extract this information.
- Display the information as `Service Key: {service_key}`.
- Additionally, assume the existing key is a Development key:
  - Make it so this key is only used in the `Debug` build configurations, and use `le475jUm1D` as the Production key on `Release` builds.
