export const setShortName = (setErrors, setJob, val) => {
  const re = /^[a-z0-9_\-]+$/i;

  val = val.trim().toLowerCase();

  if (!val.match(re) && val !== '') {
    setJob({
      shortName: val.trim().toLowerCase()
    });

    setErrors([
      'Your job shortname may only contain lower-case letters, numbers, hyphens, and underscores.',
    ]);
  } else if (val.length > 100) {
    setErrors([
      'Your job shortname may not exceed 100 characters in length.',
    ]);
  } else {
    setJob({
      shortName: val.trim().toLowerCase()
    });

    setErrors([]);
  }
};

export const setTitleAndSpeakers = (job, key, setJob, val) => {
  // Replaces backticks with single quotes.
  if (val.includes('`')) {
    val = val.replace('`', '\'');
  }

  // Escapes curly braces.
  if (val.includes('{')) {
    val = val.replace('{', '\{');
  }

  if (val.includes('}')) {
    val = val.replace('{', '\}');
  }

  setJob({
    ...job,
    [key]: val,
  });
};