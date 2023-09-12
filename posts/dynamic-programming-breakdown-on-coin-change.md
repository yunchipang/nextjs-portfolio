---
title: 'Dynamic Programming breakdown on Leetcode 322. Coin Change'
date: '2023-09-11'
techStack:
  - Leetcode
  - Dynamic Programming
---

I had a difficult time understanding how to solve dynamic programming problems on leetcode. Thus, I decided to write myself a note on my path breaking down [Leetcode 322. Coin Change](https://leetcode.com/problems/coin-change/). From recursive solution, recursive solution with caching, to the optimal dynamic programming solution.

### 1. recursive solution

```python
def coinChange(self, coins: List[int], amount: int) -> int:

    def dfs(amount):
		# base case: amount left == 0 or < 0
		if amount==0:
			return 0
		if amount < 0:
			return -1

		# recursive case
		result = amount+1 # set to an impossible num of coins
		for c in coins: # try to use every coin
			subProblem = dfs(amount-c)
			if subProblem != -1:
				result = min(result, 1+subProblem)

		# after trying all coins, return the result
		return result if result != amount+1 else -1

    return dfs(amount)
```

### 2. recursive solution + caching

```python
def coinChange(self, coins: List[int], amount: int) -> int:

	# key=(i, amount), value=min num of coins sum up to amount
    cache = {}

    def dfs(amount):
		# base cases
		# bad: amount left == 0 or < 0
		if amount==0:
			return 0
		if amount < 0:
			return -1
		# good: already computed & cached
		if amount in cache:
			return cache[amount]

		# recursive case
		result = amount+1 # set to an impossible num of coins
		for c in coins: # try to use every coin
			subProblem = dfs(amount-c)
			if subProblem != -1:
				result = min(result, 1+subProblem)

		# after trying all coins, cache & return result
		if result == amount+1:
			result = -1
		cache[amount] = result
		return result

    return dfs(amount)
```

### 3. bottom-up dynamic programming

```python
def coinChange(self, coins: List[int], amount: int) -> int:
	# init dp array with every value==amount+1
	# so when final result dp[0]==amount+1, we know that there's no valid solution
	dp = [amount+1] * (amount+1)
	dp[0] = 0 # use 0 coinsto sum up to 0

	# bottom-up approach, solve min coins summing up to 1,2,3 ..., and 11
	for a in range(1, amount+1):
		for c in coins:
			if a-c >= 0: # if this coin is usable
				# number of min coins summing up to a can either be:
				# dp[a] -> the current min # coins we know so far
				# 1 + dp[a-c] -> min # coins summing up to a-c, and add 1 (this coin c)
				dp[a] = min(dp[a], 1+dp[a-c])

	return dp[amount] if dp[amount] != amount+1 else -1
```
