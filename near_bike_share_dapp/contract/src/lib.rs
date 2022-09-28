use near_sdk::{
    borsh::{self, BorshDeserialize, BorshSerialize},
    near_bindgen,
};

const DEFAULT_NUM_OF_BIKES: usize = 5;

/**
 * Contract
 */
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct Contract {
    num_of_bikes: usize,
}

impl Default for Contract {
    fn default() -> Self {
        Self {
            num_of_bikes: DEFAULT_NUM_OF_BIKES,
        }
    }
}

#[near_bindgen]
impl Contract {
    
    /**
     * get num of bikes
     */
    pub fn num_of_bikes(&self) -> usize {
        self.num_of_bikes
    }
}

/**
 * test code
 */
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn check_default() {
        // create contract
        let contract = Contract::default();
        // check num of bikes
        assert_eq!(contract.num_of_bikes(), DEFAULT_NUM_OF_BIKES);
    }
}