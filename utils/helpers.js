module.exports = {
  //FORMAT DATE & TIME STAMP//
    format_date: (date) => {
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        });
    },
    format_summary: (contactInfo) => {
      if (contactInfo.length > 300) {
        return contactInfo.substring(0, 300) + "...";
      } else {
        return contactInfo;
      }
    },
    format_summary: (education) => {
      if (education.length > 300) {
        return education.substring(0, 300) + "...";
      } else {
        return education;
      }
    },
    format_summary: (workExperience) => {
      if (workExperience.length > 300) {
        return workExperience.substring(0, 300) + "...";
      } else {
        return workExperience;
      }
    },
    format_summary: (skills) => {
      if (skills.length > 300) {
        return skills.substring(0, 300) + "...";
      } else {
        return skills;
      }
    },
    format_summary: (summary) => {
      if (summary.length > 300) {
        return summary.substring(0, 300) + "...";
      } else {
        return summary;
      }
    },
    };