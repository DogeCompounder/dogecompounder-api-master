import { ConstRecord } from '../../../types/const';
import Token from '../../../types/token';

const WWDOGE = {
  name: 'Wrapped Doge',
  symbol: 'WWDOGE',
  address: '0xb7ddc6414bf4f5515b52d8bdd69973ae205ff101',
  chainId: 2000,
  decimals: 18,
  website: 'https://dogechain.dog/',
  description:
    '',
  logoURI:
    'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
} as const;

const _tokens = {
  KIB: {
    name: 'Kibble',
    symbol: 'KIB',
    address: '0x1e1026ba0810e6391b0f86afa8a9305c12713b66',
    chainId: 2000,
    decimals: 18,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  USDCm: {
    name: 'USD Coin',
    symbol: 'USDC',
    address: '0x765277EebeCA2e31912C9946eAe1021199B39C61',
    chainId: 2000,
    decimals: 6,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  ETH: {
    name: 'Ethereum',
    symbol: 'ETH',
    address: '0xB44a9B6905aF7c801311e8F4E76932ee959c663C',
    chainId: 2000,
    decimals: 18,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  WETH: {
    name: 'Wrapped Ethereum',
    symbol: 'WETH',
    address: '0x9F4614E4Ea4A0D7c4B1F946057eC030beE416cbB',
    chainId: 2000,
    decimals: 18,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  USDTs: {
    name: 'Tether USD',
    symbol: 'USDT',
    address: '0x7f8e71DD5A7e445725F0EF94c7F01806299e877A',
    chainId: 2000,
    decimals: 6,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  USDT: {
    name: 'Tether USD',
    symbol: 'USDT',
    address: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
    chainId: 2000,
    decimals: 6,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  DAIm: {
    name: 'Dai Stablecoin',
    symbol: 'DAI',
    address: '0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C',
    chainId: 2000,
    decimals: 18,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  DAI: {
    name: 'Dai Stablecoin',
    symbol: 'DAI',
    address: '0xB3306f03595490e5cC3a1b1704a5a158D3436ffC',
    chainId: 2000,
    decimals: 18,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  DC: {
    name: 'Dogechain Token',
    symbol: 'DC',
    address: '0x7B4328c127B85369D9f82ca0503B000D09CF9180',
    chainId: 2000,
    decimals: 18,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  USDC: {
    name: 'USD Coin',
    symbol: 'USDC',
    address: '0x85C2D3bEBffD83025910985389aB8aD655aBC946',
    chainId: 2000,
    decimals: 6,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  CHEWY: {
    name: 'CHEWY',
    symbol: 'CHEWY',
    address: '0xbA2fa659f475f69EeEFa245523DBa9C14BbA7163',
    chainId: 2000,
    decimals: 18,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  YODE: {
    name: 'YodeDEX Token',
    symbol: 'YODE',
    address: '0x6fc4563460d5f45932c473334d5c1c5b4aea0e01',
    chainId: 2000,
    decimals: 18,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  WBTC: {
    name: 'Wrapped BTC',
    symbol: 'WBTC',
    address: '0xfA9343C3897324496A05fC75abeD6bAC29f8A40f',
    chainId: 2000,
    decimals: 8,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  BUSD: {
    name: 'BUSD Token',
    symbol: 'BUSD',
    address: '0x332730a4F6E03D9C55829435f10360E13cfA41Ff',
    chainId: 2000,
    decimals: 18,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  BNB: {
    name: 'Binance',
    symbol: 'BNB',
    address: '0xA649325Aa7C5093d12D6F98EB4378deAe68CE23F',
    chainId: 2000,
    decimals: 18,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  SLURP: {
    name: 'FKSLURPDEV',
    symbol: 'SLURP',
    address: '0x0caE51e1032e8461f4806e26332c030E34De3aDb',
    chainId: 2000,
    decimals: 18,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
  DOGEPUP: {
    name: 'DOGE PUP TOKEN',
    symbol: 'DOGEPUP',
    address: '0x1b15b9446b9f632a78396a1680DAaE17f74Ce8d9',
    chainId: 2000,
    decimals: 18,
    logoURI:
      'https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png',
    website: 'https://www.kibbleswap.dog/',
    description:
      '',
  },
} as const;
export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;
