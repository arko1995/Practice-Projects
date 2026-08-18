const remainingMethods = function (n, k, invocations) {
  const suspicious = new Set();

  const graph = Array.from({ length: n }, () => []);
  for (const [caller, called] of invocations) {
    graph[caller].push(called);
  }

  function dfs(method) {
    if (suspicious.has(method)) return;

    suspicious.add(method);

    for (let neighbor of graph[method]) {
      dfs(neighbor);
    }
  }

  dfs(k);

  for (const [caller, called] of invocations) {
    const callerIsSuspicious = suspicious.has(caller);
    const calledIsSuspicious = suspicious.has(called);

    if (!callerIsSuspicious && calledIsSuspicious) {
      return Array.from({ length: n }, (_, index) => index);
    }
  }

  const output = [];

  for (let i = 0; i < n; i++) {
    if (!suspicious.has(i)) {
      output.push(i);
    }
  }

  return output;
};

remainingMethods(5, 0, [
  [1, 2],
  [0, 2],
  [0, 1],
  [3, 4],
]);
