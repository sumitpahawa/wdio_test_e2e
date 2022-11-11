Feature: Advance Web Interaction Feature
    @demo
    Scenario Outline: Advance Interaction demo
        Given Login in to inventory web page
        When Inventory Page should list <NumberOfProducts>
        Then Validate all the product have valid price

        Examples:
            | Test_ID  | NumberOfProducts |
            | AI_TC003 | 6             |