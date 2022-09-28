# FongibleTokenDApp
Near上で動作するDAppです。

## Fongible Tokenをデプロイする方法

1. `cd ft`
2. `cargo build --all --target wasm32-unknown-unknown --release`
3. `cp target/wasm32-unknown-unknown/release/fungible_token.wasm ../res`
4. `export ID=dev-1660204085773-49134722844982`
5. `near create-account sub.$ID --masterAccount $ID --initialBalance 30`
6. `cd ../`
7. `near deploy sub.$ID --wasmFile res/fungible_token.wasm`

```cmd
Starting deployment. Account id: sub.dev-1660204085773-49134722844982, node: https://rpc.testnet.near.org, helper: https://helper.testnet.near.org, file: res/fungible_token.wasm
Transaction Id 9dHjBikvvKCzsYmGrFnrfSdY81Xsk8ctp24Czrd977P3
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/9dHjBikvvKCzsYmGrFnrfSdY81Xsk8ctp24Czrd977P3
Done deploying to sub.dev-1660204085773-49134722844982
```

## コントラクトの操作

### トークンを発行するコマンド
 `near call sub.$ID new '{"owner_id": "'$ID'", "total_supply": "1000000000000000", "metadata": { "spec": "ft-1.0.0", "name": "My First Token", "symbol": "MYFT", "decimals": 8 }}' --accountId $ID`

### コントラクトにアカウントを登録するコマンド
 `near call sub.$ID storage_deposit '' --accountId nftcontract.dev-1660204085773-49134722844982 --amount 0.00125`

 ```
 Transaction Id Cgup64C4NxtQJKddPEgZ2a9jMv7HmrqeyLdD3i8V17vE
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/Cgup64C4NxtQJKddPEgZ2a9jMv7HmrqeyLdD3i8V17vE
{ total: '1250000000000000000000', available: '0' }
```

### トークンを送金するコマンド
 `near call sub.$ID ft_transfer '{"receiver_id": "nftcontract.dev-1660204085773-49134722844982", "amount": "19"}' --accountId $ID --amount 0.000000000000000000000001`

### トークンの残高を確認するコマンド
 `near view sub.$ID ft_balance_of '{"account_id": "nftcontract.dev-1660204085773-49134722844982"}'`

 ```cmd
View call: sub.dev-1660204085773-49134722844982.ft_balance_of({"account_id": "nftcontract.dev-1660204085773-49134722844982"})
'19'
 ```

