// src/pages/login/Login.tsx
import React, {useEffect, useState} from 'react';
import './login.css';
import {Contract, ethers} from 'ethers';
import VoiceInputComponent from '../voice-input/voice-input';

interface LoginProps {
    onLogin: () => void;
}

const LoginComponent: React.FC<LoginProps> = ({ onLogin }) => {
    const [contract, setContract] = useState<Contract | null>(null);
    const [loading, setLoading] = useState(true);
    const VoiceRecordABI = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "text",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "location",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "storeRecord",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "getRecord",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "text",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "location",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "text",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "location",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RecordStored",
            "type": "event"
        }
    ]
    const [connecting, setConnecting] = useState(false);
    useEffect(() => {
        async function initContractOld() {
            if (!window.ethereum) {
                alert('MetaMask is not installed.');
                setLoading(false);
                return;
            }
                try {
                    const provider = new ethers.BrowserProvider(window.ethereum);
                    await provider.send('eth_requestAccounts', []);
                    const signer = await provider.getSigner();
                    const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS as string;
                    const contractInstance = new ethers.Contract(contractAddress, VoiceRecordABI, signer);
                    setContract(contractInstance);
                } catch (err) {
                    console.error('Contract initialization error:', err);
                } finally {
                    setLoading(false);
                }


        }

        async function initContract() {
            if (connecting) return; // prevent multiple calls
            setConnecting(true);
if(contract){
    try {
        const provider = new ethers.BrowserProvider(window.ethereum);

        const accounts = await provider.listAccounts();
        if (accounts.length === 0) {
            await provider.send('eth_requestAccounts', []);
        }

        const signer = await provider.getSigner();
        const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS as string;
        const contractInstance = new ethers.Contract(contractAddress, VoiceRecordABI, signer);
        setContract(contractInstance);
    } catch (error) {
        console.error('Contract initialization error:', error);
    } finally {
        setConnecting(false);
        setLoading(false);
    }
}

        }

        initContract();
    }, []);

    return (
        <div className="login-container">
            <img src="/vite.svg" alt="Logo" className="logo" />
            <h1>FinTracker</h1>
            <h2>Login</h2>

            {/*{loading ? (*/}
            {/*    <p>Connecting to wallet...</p>*/}
            {/*) : contract ? (*/}
            {/*    <VoiceInputComponent contract={contract} />*/}
            {/*) : (*/}
            {/*    <p>Unable to load contract.</p>*/}
            {/*)}*/}

            <VoiceInputComponent contract={contract} />

            <button onClick={onLogin}>Login with Demo</button>
        </div>
    );
};

export default LoginComponent;
