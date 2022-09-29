# BikeShareDApp
Near上で動作するDAppです。

### 雛形生成コマンド
 `npx create-near-app@3.1.0 --frontend=react --contract=rust near_bike_share_dapp`

### コンソールに表示されるURL情報
 ```cmd
 see: https://explorer.testnet.near.org/accounts/mashharuki.testnet
App.js:187 see: https://explorer.testnet.near.org/accounts/dev-1664367873698-91420483511088
```

### スマートコントラクトのテストコマンド
`yarn test:unit`

```cmd
running 3 tests
test tests::check_default ... ok
test tests::check_inspecting_account ... ok
test tests::return_by_other_account - should panic ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests bike_share

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

✨  Done in 16.48s.
```

### 参考文献
 1. [Near Workspaces](https://github.com/near/workspaces-rs)