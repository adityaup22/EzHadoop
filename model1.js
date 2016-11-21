{
"rowsperpage" : 10,
"database" : {
"connection" : "localmysql",
"sql" : "Select * from Files",
"orderby" : "Fname",
"execute" : ["DROP TABLE IF EXISTS Files",
"CREATE TABLE IF NOT EXISTS  Files (fileID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,Fname NVARCHAR(255),Size NVARCHAR(255), UploadedBy NVARCHAR(255), BlockSize NVARCHAR(255), Replica NVARCHAR(255))",

"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")",
"INSERT INTO Files(Fname,Size,UploadedBy,Blocksize,Replica)
VALUES("File1","1GB","Shyaama","64","3")"
]
}
}