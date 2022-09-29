import { 
  connect, 
  Contract, 
  keyStores, 
  WalletConnection 
} from 'near-api-js'
import getConfig from './config'

const nearConfig = getConfig(process.env.NODE_ENV || 'development')

/**
 * Initialize contract & set global variables
 */
export async function initContract() {
  // Initialize connection to the NEAR testnet
  const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, nearConfig))
  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near)
  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId()
  // Initializing our contract APIs by contract name and configuration
  window.contract = await new Contract(
    window.walletConnection.account(), 
    nearConfig.contractName, 
    {
      // View methods are read only. They don't modify the state, but usually return some value.
      viewMethods: [
        "num_of_bikes",
        "is_available",
        "who_is_using",
        "who_is_inspecting",
      ],
      // Change methods can modify the state. But you don't receive the returned value when called.
      changeMethods: [
        "use_bike", 
        "inspect_bike", 
        "return_bike"
      ],
    })
}

/**
 * logout function
 */
export function logout() {
  window.walletConnection.signOut()
  window.location.replace(window.location.origin + window.location.pathname)
}

/**
 * login function
 */
export function login() {
  window.walletConnection.requestSignIn(nearConfig.contractName)
}

/**
 * get num of bikes function
 */
export async function num_of_bikes() {
  let n = await window.contract.num_of_bikes();
  return n;
}

/**
 * get status of bikes
 */
export async function is_available(index) {
  let response = await window.contract.is_available({
    index: index,
  });
  return response;
}

/**
 * get status of bikes using
 */
export async function who_is_using(index) {
  let response = await window.contract.who_is_using({
    index: index,
  });
  return response;
}

/**
 * get status of bikes inspecting
 */
export async function who_is_inspecting(index) {
  let response = await window.contract.who_is_inspecting({
    index: index,
  });
  return response;
}

/**
 * change status function
 */
export async function use_bike(index) {
  let response = await window.contract.use_bike({
    index: index,
  });
  return response;
}

/**
 * change status function
 */
export async function inspect_bike(index) {
  let response = await window.contract.inspect_bike({
    index: index,
  });
  return response;
}

/**
 * change status function
 */
export async function return_bike(index) {
  let response = await window.contract.return_bike({
    index: index,
  });
  return response;
}