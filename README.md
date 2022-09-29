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

### スマートコントラクトの結合テストコマンド
`yarn test:integration:rs`

```cmd
2022-09-29T08:39:44.392149Z DEBUG stats: EpochId(`11111111111111111111111111111111`) Orphans: 0 With missing chunks: 0 In processing 0
2022-09-29T08:39:54.393347Z DEBUG stats: EpochId(`11111111111111111111111111111111`) Orphans: 0 With missing chunks: 0 In processing 0
16 GefUexnWNz2pwDH6X3EcXNURF5FWN4JSVa45vkAXb29c Processed in progress for 0ms   Chunks:(✔))
15 dyZc3cAjXfivEcuHScyVcv2zZv3BJxuZTjz7ftbXbUs Processed in progress for 1ms   Chunks:(✔))
14 AoYyZpz7xcCrwPw9HaSoVeQrpcHL5wdEDoionJgZRtG5 Processed in progress for 39ms   Chunks:(✔))
13 HRBSjkSVAEj3nDhUuKkoCgu4BYb8MhukkZ2sJcsPX1Kn Processed in progress for 0ms   Chunks:(✔))
12 EqYMLNkeTv6vwjfNxHKsAjZD9uW33RPxhYdNYT8KyyP5 Processed in progress for 1ms   Chunks:(✔))
11 FAvL98hziYqRAo6c5dMuspPLuNEgg3dA8Pti98EjCyN3 Processed in progress for 0ms   Chunks:(✔))
10 C2FFaUatGwLVj4BwwX4koHECaYY8TVhc7BxN6TcxkArJ Processed in progress for 1ms   Chunks:(✔))
9 JBQMykKXEFUP51Eth9HnH3vgADcJq79uw12Uf5TQ4m5E Processed in progress for 0ms   Chunks:(✔))
8 B4kvfbs5JUSjfY5J8MDCHQpaz71f2YiauAXhh8yX99Gs Processed in progress for 4ms   Chunks:(✔))
7 GTJrb4q2zSdRaPZLxTPm5P2mnKs3PKFBQGtaWSuX2Dbb Processed in progress for 5ms   Chunks:(✔))
6 2p84cm6vsY1RT4U3mMpaNn8JYQwriX6UpVRg83ZmaXHP Processed in progress for 0ms   Chunks:(✔))
5 5T4XLEoWCNHic9zaX3zrRdnpNPF9n941F5xg7JZ9QcnT Processed in progress for 1ms   Chunks:(✔))
4 CMedPJnPMxEpGSF5rX5KsZTN5YHr4zmv8WbDbiwV92DA Processed in progress for 76ms   Chunks:(✔))
3 5apU7UV1kuPnyeetx7rQ56XPj5XjrmdSSaRuBHBFyzzX Processed in progress for 6ms   Chunks:(✔))
2 B2LFjVsfseZM1zBEqnXNZhzDL3A5YdgwCHunCEKJDZcH Processed in progress for 1ms   Chunks:(✔))
1 8LN2w7JkFhwHBqRVHQ8iQgTHsUiQVXVKJbq1jvXEeC27 Processed in progress for 0ms   Chunks:(X))
2022-09-29T08:40:04.394964Z DEBUG stats: EpochId(`11111111111111111111111111111111`) Orphans: 0 With missing chunks: 0 In processing 0
32 F6X5cHCprs8GafVAqR4skhT5qJqGgXC7cHRXH4DeeZ2W Processed in progress for 1ms   Chunks:(✔))
31 3gH3Qd9QMKX6AfHxbsrqWbsEY5vngiSyHLEaUatqCHaL Processed in progress for 1ms   Chunks:(✔))
30 4yNhnp4j6nxT7yEzhV8LQ83fxER8t2tLzH1HaSnAgYvg Processed in progress for 1ms   Chunks:(✔))
29 8YCrGKvX8jiYetakuQyuR9HsQ7JTebfZRH3pYgYPsoX Processed in progress for 1ms   Chunks:(✔))
28 HP57oapHbViaCUFPiXPXQYPcxbpQkr2kuiYcrEW4er7q Processed in progress for 1ms   Chunks:(✔))
27 DwTKU3edwiGCcLiV8UM7WQHwAwWAWELsez8LvUDvDrPE Processed in progress for 1ms   Chunks:(✔))
26 8yC9mSJ6W79F8f2CUA1gkpJjyPGqtqGt5NyvQ9cnoaq2 Processed in progress for 1ms   Chunks:(✔))
25 dVHAWrctof8VSgtVXNDvrqMxmewsi3BJ1cB41HttUy2 Processed in progress for 1ms   Chunks:(✔))
24 38PvBPykRYVE6Ger7LqwTZKrTcqVd5CSBjCaESnh3gNJ Processed in progress for 1ms   Chunks:(✔))
23 4T1kzWoazDDjVczKTpdh65yQVmsaVQFG14WugXQ8H5kz Processed in progress for 0ms   Chunks:(✔))
22 Brc8ryUht7NF5NDv2E4NTLLJEiAeHHFrkqNyJJnNACCS Processed in progress for 1ms   Chunks:(✔))
21 F6ZAU7Bg9mMR5J59bRZ6TgDvzyCveUhSPKCmhZC5Y6rn Processed in progress for 1ms   Chunks:(✔))
20 3LknzB2egupwVnd3pTHi8KpkbDUuit2xaetN83QDqPUX Processed in progress for 1ms   Chunks:(✔))
19 AjSz5d1B3APtU7T2fu3YFgYekVCXedJxedgkpGY1Vq2A Processed in progress for 0ms   Chunks:(✔))
18 4SHb7m3BKcrKu9wpEFvyJ3LtMmYx9QSy3D5KpaqvGLVV Processed in progress for 1ms   Chunks:(✔))
17 jpUdHHfYYrexXXg7C6x7aZ5sjxfQK4uCguHSuGpqWXG Processed in progress for 6ms   Chunks:(✔))
16 GefUexnWNz2pwDH6X3EcXNURF5FWN4JSVa45vkAXb29c Processed in progress for 0ms   Chunks:(✔))
15 dyZc3cAjXfivEcuHScyVcv2zZv3BJxuZTjz7ftbXbUs Processed in progress for 1ms   Chunks:(✔))
14 AoYyZpz7xcCrwPw9HaSoVeQrpcHL5wdEDoionJgZRtG5 Processed in progress for 39ms   Chunks:(✔))
13 HRBSjkSVAEj3nDhUuKkoCgu4BYb8MhukkZ2sJcsPX1Kn Processed in progress for 0ms   Chunks:(✔))
12 EqYMLNkeTv6vwjfNxHKsAjZD9uW33RPxhYdNYT8KyyP5 Processed in progress for 1ms   Chunks:(✔))
11 FAvL98hziYqRAo6c5dMuspPLuNEgg3dA8Pti98EjCyN3 Processed in progress for 0ms   Chunks:(✔))
10 C2FFaUatGwLVj4BwwX4koHECaYY8TVhc7BxN6TcxkArJ Processed in progress for 1ms   Chunks:(✔))
9 JBQMykKXEFUP51Eth9HnH3vgADcJq79uw12Uf5TQ4m5E Processed in progress for 0ms   Chunks:(✔))
8 B4kvfbs5JUSjfY5J8MDCHQpaz71f2YiauAXhh8yX99Gs Processed in progress for 4ms   Chunks:(✔))
7 GTJrb4q2zSdRaPZLxTPm5P2mnKs3PKFBQGtaWSuX2Dbb Processed in progress for 5ms   Chunks:(✔))
6 2p84cm6vsY1RT4U3mMpaNn8JYQwriX6UpVRg83ZmaXHP Processed in progress for 0ms   Chunks:(✔))
5 5T4XLEoWCNHic9zaX3zrRdnpNPF9n941F5xg7JZ9QcnT Processed in progress for 1ms   Chunks:(✔))
4 CMedPJnPMxEpGSF5rX5KsZTN5YHr4zmv8WbDbiwV92DA Processed in progress for 76ms   Chunks:(✔))
3 5apU7UV1kuPnyeetx7rQ56XPj5XjrmdSSaRuBHBFyzzX Processed in progress for 6ms   Chunks:(✔))
2 B2LFjVsfseZM1zBEqnXNZhzDL3A5YdgwCHunCEKJDZcH Processed in progress for 1ms   Chunks:(✔))
1 8LN2w7JkFhwHBqRVHQ8iQgTHsUiQVXVKJbq1jvXEeC27 Processed in progress for 0ms   Chunks:(X))
2022-09-29T08:40:14.397250Z DEBUG stats: EpochId(`11111111111111111111111111111111`) Orphans: 0 With missing chunks: 0 In processing 0
48 EaRjTSx4XBGQCKnzXx8ysJm8XiGXh74aZE8GyTHTqVDq Processed in progress for 1ms   Chunks:(✔))
47 5DcZwnZRi4qJTst8Ly2zv5uMDt655Q2H2R2YwkvuzXYC Processed in progress for 0ms   Chunks:(✔))
46 29RuQaD7rtDhkjHLDrLPDUxG6VV4tdSgy8vHiWs6vBUY Processed in progress for 2ms   Chunks:(✔))
45 Q55EkfFEh7D9ok4XBF6ph4c8kEiTtRh4bwWGgqMHthg Processed in progress for 2ms   Chunks:(✔))
44 8H4qZL51iUdysP7wBpTXHDB5DLqdYcBxJWZva7ZxgMVn Processed in progress for 1ms   Chunks:(✔))
43 8tHGx9vQD5cmYUUopqanVt2eWP5DWYBYubDPmHi298Mr Processed in progress for 2ms   Chunks:(✔))
42 By5etuEWzhxqMUGUCUvs5bivpYbwM4bqW79mWX1ofvYc Processed in progress for 2ms   Chunks:(✔))
41 Gga3Ubsg78jmQ3xm9EzvB2naWsZMc1wvt4hPq4uVhnrN Processed in progress for 1ms   Chunks:(✔))
40 8dFj3jA4YjmfC2XUxefUTAaGT443dRTLDPWxjL1rBTkd Processed in progress for 0ms   Chunks:(✔))
39 8RtJNLyBbdJutWLmcSzrETwafEGT4c4NLUZicUmBX7Gd Processed in progress for 1ms   Chunks:(✔))
38 91FhVnnWkCbWQ65QP4QqW2b22Ky9Pojmd56KbSMBsx4R Processed in progress for 1ms   Chunks:(✔))
37 LGRKBpBunabb7JoVsnp96ozpbvZYKe2FCSm9XWp8BeL Processed in progress for 0ms   Chunks:(✔))
36 BWq2fKgoVcsNMuCiRrRFLdwHrZ7zkJnB3GFSPay5aU14 Processed in progress for 2ms   Chunks:(✔))
35 DYDHk43S7F1hZDFqrf3ZY6ncdjxZbmB9edefpkoh1yLB Processed in progress for 1ms   Chunks:(✔))
34 FNppnExYP6oiWq5Vhr52XzyxfuqSttoWrgsfw3BNKmyW Processed in progress for 1ms   Chunks:(✔))
33 6bFofZ1f2h3jYGLmhesUL2GD2QCxPKnfjEE6m48mzFX6 Processed in progress for 1ms   Chunks:(✔))
32 F6X5cHCprs8GafVAqR4skhT5qJqGgXC7cHRXH4DeeZ2W Processed in progress for 1ms   Chunks:(✔))
31 3gH3Qd9QMKX6AfHxbsrqWbsEY5vngiSyHLEaUatqCHaL Processed in progress for 1ms   Chunks:(✔))
30 4yNhnp4j6nxT7yEzhV8LQ83fxER8t2tLzH1HaSnAgYvg Processed in progress for 1ms   Chunks:(✔))
29 8YCrGKvX8jiYetakuQyuR9HsQ7JTebfZRH3pYgYPsoX Processed in progress for 1ms   Chunks:(✔))
28 HP57oapHbViaCUFPiXPXQYPcxbpQkr2kuiYcrEW4er7q Processed in progress for 1ms   Chunks:(✔))
27 DwTKU3edwiGCcLiV8UM7WQHwAwWAWELsez8LvUDvDrPE Processed in progress for 1ms   Chunks:(✔))
26 8yC9mSJ6W79F8f2CUA1gkpJjyPGqtqGt5NyvQ9cnoaq2 Processed in progress for 1ms   Chunks:(✔))
25 dVHAWrctof8VSgtVXNDvrqMxmewsi3BJ1cB41HttUy2 Processed in progress for 1ms   Chunks:(✔))
24 38PvBPykRYVE6Ger7LqwTZKrTcqVd5CSBjCaESnh3gNJ Processed in progress for 1ms   Chunks:(✔))
23 4T1kzWoazDDjVczKTpdh65yQVmsaVQFG14WugXQ8H5kz Processed in progress for 0ms   Chunks:(✔))
22 Brc8ryUht7NF5NDv2E4NTLLJEiAeHHFrkqNyJJnNACCS Processed in progress for 1ms   Chunks:(✔))
21 F6ZAU7Bg9mMR5J59bRZ6TgDvzyCveUhSPKCmhZC5Y6rn Processed in progress for 1ms   Chunks:(✔))
20 3LknzB2egupwVnd3pTHi8KpkbDUuit2xaetN83QDqPUX Processed in progress for 1ms   Chunks:(✔))
19 AjSz5d1B3APtU7T2fu3YFgYekVCXedJxedgkpGY1Vq2A Processed in progress for 0ms   Chunks:(✔))
18 4SHb7m3BKcrKu9wpEFvyJ3LtMmYx9QSy3D5KpaqvGLVV Processed in progress for 1ms   Chunks:(✔))
17 jpUdHHfYYrexXXg7C6x7aZ5sjxfQK4uCguHSuGpqWXG Processed in progress for 6ms   Chunks:(✔))
16 GefUexnWNz2pwDH6X3EcXNURF5FWN4JSVa45vkAXb29c Processed in progress for 0ms   Chunks:(✔))
15 dyZc3cAjXfivEcuHScyVcv2zZv3BJxuZTjz7ftbXbUs Processed in progress for 1ms   Chunks:(✔))
14 AoYyZpz7xcCrwPw9HaSoVeQrpcHL5wdEDoionJgZRtG5 Processed in progress for 39ms   Chunks:(✔))
13 HRBSjkSVAEj3nDhUuKkoCgu4BYb8MhukkZ2sJcsPX1Kn Processed in progress for 0ms   Chunks:(✔))
12 EqYMLNkeTv6vwjfNxHKsAjZD9uW33RPxhYdNYT8KyyP5 Processed in progress for 1ms   Chunks:(✔))
11 FAvL98hziYqRAo6c5dMuspPLuNEgg3dA8Pti98EjCyN3 Processed in progress for 0ms   Chunks:(✔))
10 C2FFaUatGwLVj4BwwX4koHECaYY8TVhc7BxN6TcxkArJ Processed in progress for 1ms   Chunks:(✔))
9 JBQMykKXEFUP51Eth9HnH3vgADcJq79uw12Uf5TQ4m5E Processed in progress for 0ms   Chunks:(✔))
8 B4kvfbs5JUSjfY5J8MDCHQpaz71f2YiauAXhh8yX99Gs Processed in progress for 4ms   Chunks:(✔))
7 GTJrb4q2zSdRaPZLxTPm5P2mnKs3PKFBQGtaWSuX2Dbb Processed in progress for 5ms   Chunks:(✔))
6 2p84cm6vsY1RT4U3mMpaNn8JYQwriX6UpVRg83ZmaXHP Processed in progress for 0ms   Chunks:(✔))
5 5T4XLEoWCNHic9zaX3zrRdnpNPF9n941F5xg7JZ9QcnT Processed in progress for 1ms   Chunks:(✔))
4 CMedPJnPMxEpGSF5rX5KsZTN5YHr4zmv8WbDbiwV92DA Processed in progress for 76ms   Chunks:(✔))
3 5apU7UV1kuPnyeetx7rQ56XPj5XjrmdSSaRuBHBFyzzX Processed in progress for 6ms   Chunks:(✔))
2 B2LFjVsfseZM1zBEqnXNZhzDL3A5YdgwCHunCEKJDZcH Processed in progress for 1ms   Chunks:(✔))
1 8LN2w7JkFhwHBqRVHQ8iQgTHsUiQVXVKJbq1jvXEeC27 Processed in progress for 0ms   Chunks:(X))
Passed ✅ test_transfer_ft_to_user_inspected_bike
✨  Done in 116.26s.   
```

### 参考文献
 1. [Near Workspaces](https://github.com/near/workspaces-rs)
 2. [Gitpod](https://gitpod.io/workspaces)