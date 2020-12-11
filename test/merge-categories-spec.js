const { expect } = require('chai');
const { mergeCategories } = require('../merge-categories');

describe("mergeCategories()", () => {
  context("Using <li> tags", () => {
    const template = `
      <div>
        <ul>
          <!-- Content here -->
        </ul>
      </div>
    `;

    it("should return no <li>s for no categories", () => {
      let categoryArr = []
      let actual = mergeCategories(template, categoryArr, "li")
      expect(actual).to.include("<div>")
      expect(actual).to.include("</div>")
      expect(actual).to.include("<ul>")
      expect(actual).to.include("</ul>")

      expect(actual).to.not.include("<li>")
      expect(actual).to.not.include("</li>")
      expect(actual).to.not.include("<!-- Content here -->")
      });

    it("should return a single <li> for one category", () => {
      let categories = ["test"]
      let actual = mergeCategories(template, categories, "li")
      expect(actual).to.include("<div>")
      expect(actual).to.include("</div>")
      expect(actual).to.include("<ul>")
      expect(actual).to.include("</ul>")

      expect(actual).to.include("<li>test</li>")
      expect(actual).to.not.include("<!-- Content here -->")

    });

    it("should return an <li> for each category", () => {
      let categories = ["test1", "test2"]
      let actual = mergeCategories(template, categories, "li")
      expect(actual).to.include("<div>")
      expect(actual).to.include("</div>")
      expect(actual).to.include("<ul>")
      expect(actual).to.include("</ul>")

      expect(actual).to.include("<li>test1</li>")
      expect(actual).to.include("<li>test2</li>")
      expect(actual).to.not.include("<!-- Content here -->")
    });
  });

  context("using <option> tags", () => {
    const template = `
      <div>
        <select>
          <!-- Content here -->
        </select>
      </div>
    `;

    it("should return no <option>s for no categories", () => {
      expect.fail('please write this test');
    });

    it("should return a single <option> for one category", () => {
      expect.fail('please write this test');
    });

    it("should return an <option> for each category", () => {
      expect.fail('please write this test');
    });
  });
});
