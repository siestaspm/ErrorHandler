import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const validateInput = (text) => {
    setInput(text);

    if (text.length < 3) {
      setError("Input must be at least 3 characters.");
    } else {
      setError("");
    }
  };

  const handleContinue = () => {
    if (input.length < 3) {
      setError("Input must be at least 3 characters.");
      return;
    }

    alert("Success! Proceeding...");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Name:</Text>
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholder="Type something..."
        value={input}
        onChangeText={validateInput}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
