class Solution:
    def maxProfit(self, k: int, prices: list[int]) -> int:  
        memo = dict()

        def best(day, transactionsRemaining, holding):
            if day == len(prices) or transactionsRemaining == 0: return 0

            key  = (day, transactionsRemaining, holding)

            if key in memo: return memo[key]

            profit = None

            if holding:
                keepHolding = best(day+1, transactionsRemaining, True)
                sell = prices[day]+best(day+1, transactionsRemaining-1, False)
                profit = max(keepHolding, sell)

            else:
                skip = best(day+1, transactionsRemaining, False)
                buy = -prices[day]+best(day+1, transactionsRemaining, True)

                profit = max(skip, buy) 

            memo[key] = profit

            return profit

        return best(0, k, False)