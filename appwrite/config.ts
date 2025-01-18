import { Client, Databases, Storage } from 'appwrite';

// Initialize Appwrite client
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('677656b80035e7cb5794'); // Your Appwrite project ID

// Initialize Databases and Storage services
const databases = new Databases(client);

const storage = new Storage(client);

// Your database, collection, and bucket IDs
const databaseId = '6780c3a1003873410f5b';
const collectionId = '6784df9b0037f1ce3bfe';
const bucketId = '677e6d21000acd65983c';
const birthdayCollectionId= '67863025002bfc152318'
const weddingCollectionId= '678b557d002bce970e50'

export { databases, storage, databaseId, collectionId, bucketId, birthdayCollectionId, weddingCollectionId };