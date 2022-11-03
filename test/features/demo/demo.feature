Feature: Demo Feature

    @demo
    Scenario Outline: Runing first demo feature
        Given Google page is open
        When Search with <SearchItem>
        Then Click on first search result
        Then URL should matck <ExpectedURL>

        Examples:
            | Test_ID    | SearchItem | ExpectedURL           |
            | Demo_TC001 | WDIO       | https://webdriver.io/ |
