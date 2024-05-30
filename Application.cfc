component {
    this.mappings[ "/wirebox" ] = "/wirebox";
    this.datasources["cheer_skills"] = {
        class: "com.mysql.cj.jdbc.Driver", 
        bundleName: "com.mysql.cj", 
        bundleVersion: "8.0.33",
        connectionString: "jdbc:mysql://localhost:3306/cheer_skills?characterEncoding=UTF-8&serverTimezone=America/Chicago&maxReconnects=3",
        username: "root",
        password: "encrypted:2bab798e0d32249665d43331db1bb0f38bedc9db84456b72dacca19d8f0243ae",
        
        // optional settings
        connectionLimit:-1, // default:-1
        liveTimeout:15, // default: -1; unit: minutes
        alwaysSetTimeout:true, // default: false
        validate:false, // default: false
    };
}