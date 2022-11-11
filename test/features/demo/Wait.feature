Feature: Demo Wait
    @Wait
    Scenario Outline: Wait
        Given Wait page is open
        When Search withs <SearchItem>
        Then Click on firsts search result
        Then URL should match <ExpectedURL>

        Examples:
            | Test_ID    | SearchItem | ExpectedURL           |
            | Demo_TC001 | WDIO       | https://webdriver.io/ |
