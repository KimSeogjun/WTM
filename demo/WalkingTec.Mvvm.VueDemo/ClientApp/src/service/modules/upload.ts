import config from "@/config/index";

// 上传
const upload = {
    url: config.headerApi + "/_file/upload",
    method: "post"
};
// 上传地址
const actionApi = "/api/_file/upload";
// 下载地址
const fileApi = "/api/_file/downloadFile/";

// 删除file
const deletedFile = {
    url: config.headerApi + "/api/_file/DeletedFile/{id}",
    method: "post",
    blockError: true
};;

export { upload, actionApi, fileApi};

export default { upload, deletedFile };
