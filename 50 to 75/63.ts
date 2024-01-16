interface AnonymousPrivileges {
  sitesCanVisit: string[];
}

interface UserPrivileges extends AnonymousPrivileges {
  sitesCanEdit: string[];
}

interface AdminPrivileges extends UserPrivileges {
  sitesCanDelete: string[];
}

function getRolePrivileges(role: "admin"): AdminPrivileges;
function getRolePrivileges(role: "user"): UserPrivileges;
function getRolePrivileges(role: string): AnonymousPrivileges;
function getRolePrivileges(
  role: string
): AnonymousPrivileges | UserPrivileges | AdminPrivileges {
  switch (role) {
    case "admin":
      return {
        sitesCanVisit: [],
        sitesCanEdit: [],
        sitesCanDelete: [],
      };
    case "user":
      return {
        sitesCanVisit: [],
        sitesCanEdit: [],
      };
    default:
      return {
        sitesCanVisit: [],
      };
  }
}
