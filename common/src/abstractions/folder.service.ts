import { FolderData } from "../models/data/folderData";
import { Folder } from "../models/domain/folder";
import { TreeNode } from "../models/domain/treeNode";
import { FolderView } from "../models/view/folderView";

export abstract class FolderService {
  clearCache: (userId?: string) => Promise<void>;
  get: (id: string) => Promise<Folder>;
  getAll: () => Promise<Folder[]>;
  getAllDecrypted: () => Promise<FolderView[]>;
  getAllNested: () => Promise<TreeNode<FolderView>[]>;
  getNested: (id: string) => Promise<TreeNode<FolderView>>;
  saveWithServer: (folder: Folder) => Promise<any>;
  upsert: (folder: FolderData) => Promise<any>;
  replace: (folders: { [id: string]: FolderData }) => Promise<any>;
  clear: (userId: string) => Promise<any>;
  delete: (id: string) => Promise<any>;
  deleteWithServer: (id: string) => Promise<any>;
}
