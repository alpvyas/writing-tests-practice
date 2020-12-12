const { expect } = require('chai');
const { mergeItems } = require('../merge-items');
describe("The mergeItems function", () => {
  const template = `
    <table>
      <tbody>
        <!-- Content here -->
      </tbody>
    </table>
  `;
  it("should return no <tr>s and no <td>s for no items", () => {
      let items = []
      let actual = mergeItems(template, items)

      expect(actual).to.include("<table>")
      expect(actual).to.include("</table>")
      expect(actual).to.include("<tbody>")
      expect(actual).to.include("</tbody>")

      expect(actual).to.not.include("<tr>")
      expect(actual).to.not.include("</tr>")
      expect(actual).to.not.include("<td>")
      expect(actual).to.not.include("</td>")

      expect(actual).to.not.include("<!-- Content here -->")
  });

  it("should return a single <tr>, four <td>s, and a <form> for one uncompleted item", () => {
      const items = [
         { title: 'Title 1', category: 'Category 1' },
      ];
      let actual = mergeItems(template, items, "option")

      expect(actual).to.include("<table>")
      expect(actual).to.include("</table>")
      expect(actual).to.include("<tbody>")
      expect(actual).to.include("</tbody>")

      expect(actual).to.include("<tr>")
      expect(actual).to.include("</tr>")
      expect(actual).to.include("<td>Title 1</td>")
      expect(actual).to.include("<td>Category 1</td>")
      expect(actual).to.include('<form method="POST" action="/items/1">')

      expect(actual).to.not.include("<!-- Content here -->")
  });

  it("should return a single <tr>, four <td>s, and no <form> for one completed item", () => {
    let categories = []
      let actual = mergeItems(template, categories)

      expect(actual).to.include("<div>")
      expect(actual).to.include("</div>")
      expect(actual).to.include("<select>")
      expect(actual).to.include("</select>")

      expect(actual).to.not.include("<option>")
      expect(actual).to.not.include("</option>")

      expect(actual).to.not.include("<!-- Content here -->")
  });

  it("should return three <tr>s for three items", () => {
    let categories = []
      let actual = mergeItems(template, categories)

      expect(actual).to.include("<div>")
      expect(actual).to.include("</div>")
      expect(actual).to.include("<select>")
      expect(actual).to.include("</select>")

      expect(actual).to.not.include("<option>")
      expect(actual).to.not.include("</option>")

      expect(actual).to.not.include("<!-- Content here -->");
  });
});
