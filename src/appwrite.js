import { Client, Storage, Databases } from 'node-appwrite';

class AppwriteService {
  constructor() {
    const client = new Client()
      .setEndpoint(
        process.env.APPWRITE_ENDPOINT ?? 'https://cloud.appwrite.io/v1'
      )
      .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(process.env.APPWRITE_API_KEY);
    this.storage = new Storage(client);
    this.database = new Databases(client);
  }

  /**
   * Clean up files from the storage bucket by removing files older than a specified retention period.
   *
   * @param {string} bucketId - The ID of the storage bucket to clean.
   * @returns {Promise<void>} A Promise that resolves when the bucket is cleaned.
   */

  async getAllListDoc(collectionId) {
    try {
      const res = await this.database.listDocuments(
        'thegioibooking',
        collectionId
      );
      return res;
    } catch (error) {
      return error;
    }
  }
}

export { AppwriteService } ;
